import { renderTimelineItem, renderDetailsPanel } from "./templates.js"

export class TimelineApp {
    constructor() {
        this.container = document.getElementById("timeline")
        this.detailsPanel = document.getElementById("details-panel")
        this.timeline = null
        this.groupsDataSet = null
        this.itemsDataSet = null
        this.groupsExpanded = true
        this.filteredGroups = new Set()
    }

    async loadData() {
        const [groupsResponse, itemsResponse] = await Promise.all([
            fetch("../data/groups.json"),
            fetch("../data/items.json")
        ])

        const groups = await groupsResponse.json()
        const items = await itemsResponse.json()

        const transformedItems = items.map(item => {
            const [onderdeel, subonderdeel, periode, categorie] = item.id.split("-")
            return {
                ...item,
                onderdeel,
                subonderdeel,
                periode,
                categorie,
                className: `event-${categorie}`,
            }
        })

        this.groupsDataSet = new vis.DataSet(groups)
        this.itemsDataSet = new vis.DataSet(transformedItems)
    }


    async initialize() {
        try {
            await this.loadData()
            this.createTimeline(this.groups, this.items)
            this.setupEventListeners()
        } catch (error) {
            console.error("Error initializing timeline:", error)
        }
    }

    createTimeline(groups, items) {
        const today = new Date()
        const dayInMs = 24 * 60 * 60 * 1000

        const options = {
            template: renderTimelineItem,
            height: "100%",
            verticalScroll: true,
            zoomKey: "ctrlKey",
            orientation: "top",
            locale: "nl",
            showWeekScale: true,
            start: new Date(today.getTime() - (3 * dayInMs)),
            end: new Date(today.getTime() + (4 * dayInMs)),
            order: (a, b) => a.subgroup - b.subgroup
        }

        this.timeline = new vis.Timeline(
            this.container,
            this.itemsDataSet,
            this.groupsDataSet,
            options
        )
    }

    updateDetailsPanel(item) {
        this.detailsPanel.innerHTML = renderDetailsPanel(item)
    }

    setupEventListeners() {
        this.timeline.on("select", (properties) => {
            const selectedItems = this.timeline.getSelection()
            if (selectedItems.length > 0) {
                const selectedId = selectedItems[0]
                const selectedItem = this.timeline.itemsData.get(selectedId)
                this.updateDetailsPanel(selectedItem)
            } else {
                this.updateDetailsPanel(null)
            }
        })

        const multiSelector = document.querySelector("multi-selector")
        multiSelector.addEventListener("change", event => {
            const selectedOpleidingen = event.detail
            selectedOpleidingen.push("alg")
            this.updateFilters(event.detail)
        })

        const toggleButton = document.getElementById("toggle-groups")
        toggleButton.addEventListener("click", () => this.toggleAllGroups())

    }

    updateFilters(selectedOpleidingen) {
        const filter = createFilterFromOpleidingen(selectedOpleidingen)

        const groups = this.groupsDataSet.get()
        groups.forEach(group => {
            const isVisible = filter(group)
            this.filteredGroups[group.id] = isVisible
            this.groupsDataSet.update({
                id: group.id,
                visible: isVisible
            })
        })
    }

    toggleAllGroups() {
        this.groupsExpanded = !this.groupsExpanded

        const groups = this.groupsDataSet.get()

        groups.forEach(group => {
            if (group.nestedGroups) {
                this.groupsDataSet.update({
                    id: group.id,
                    showNested: this.groupsExpanded
                })
            }

            if (group.treeLevel > 1) {
                // Only make visible if it passes the current filter
                const visibleInFilter = this.filteredGroups[group.id]
                this.groupsDataSet.update({
                    id: group.id,
                    visible: this.groupsExpanded && visibleInFilter
                })
            }
        })
    }
}


function createFilterFromOpleidingen(selectedOpleidingen) {
    const opleidingen = selectedOpleidingen.map(opl => opl.toLowerCase())

    return item => {
        const id = item.id.toLowerCase()

        if (item.hasOwnProperty("nestedGroups")) {
            const matchesId = opleidingen.some(opl => id.includes(opl))
            const matchesNested = item.nestedGroups?.some(nestedId =>
                opleidingen.some(opl => nestedId.toLowerCase().includes(opl))
            )
            return matchesId || matchesNested
        }

        return opleidingen.some(opl => id.includes(opl))
    }
}
