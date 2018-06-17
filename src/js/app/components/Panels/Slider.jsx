import React from 'react'
import Element from '../../../lib/Element'
import axios from "axios/index"
import moment from 'moment'

class PanelsSlider extends Element {

    configure() {
        this.template = require("./Slider.tpl");
    }

    componentDidMount() {
        super.componentDidMount();
        this.loadData();
    }

    async loadData() {
        // const currentDate = moment();
        const currentDate = moment("28.07.2018 10:10", "DD.MM.YYYY HH:mm");

        const content = await axios.get("/data/panels.json");
        const panels = content.data;
        let slides = [];

        for (let i = 0; i < panels.length; i++) {
            let panel = panels[i];
            for (let j = 0; j < panel.events.length; j++) {
                const event = panel.events[j];
                let newPanelObj = Object.assign({}, panel);

                newPanelObj.dateStart = moment(event.date + " " + event.start, "DD.MM.YYYY HH:mm");
                newPanelObj.dateEnd = moment(event.date + " " + event.end, "DD.MM.YYYY HH:mm");

                const duration = moment.duration(currentDate.diff(newPanelObj.dateStart));
                if (duration.as('minutes') > 0) {
                    newPanelObj.startsIn = "Started " + duration.humanize() + " ago";
                } else if (duration.as('minutes') < 15) {
                    newPanelObj.startsIn = "Starts in " + duration.humanize();
                }

                slides.push(newPanelObj);
            }
        }

        slides = slides.sort((a, b) => {
            return a.dateStart - b.dateStart
        }).filter((slide) => {
            return slide.dateStart.isAfter(currentDate.subtract(15, "minutes"));
        });

        if (this._mounted) {
            this.setState({
                slides: slides
            })
        }
    }
}

export default PanelsSlider