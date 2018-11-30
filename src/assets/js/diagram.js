var chart_config = {
    chart: {
        container: "#diagram",

        nodeAlign: "BOTTOM",

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    nodeStructure: {
        text: {
            name: "Architecture"
        },
        children: [
            {
                text:{
                    name: "Analyze"
                },
                HTMLclass: 'blue',
            },
            {
                text:{
                    name: "Conception"
                },
                HTMLclass: 'blue'
            },
            {
                text:{
                    name: "Technical Recommandation"
                },
                HTMLclass: 'blue'
            }
        ]
    }
};
