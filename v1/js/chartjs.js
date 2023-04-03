
/* chart.js chart examples */
Chart.Tooltip.positioners.cursor = function (chartElements, coordinates) {
    return { 'x': coordinates['x'], 'y': coordinates['y'] - 40 };
};
// Chart.defaults.global.pointHitDetectionRadius = 1;
var customTooltips = function (tooltipModel) {
    // Tooltip Element
    var tooltipEl = document.getElementById("chartjs-tooltip");

    // Create element on first render
    if (!tooltipEl) {
        tooltipEl = document.createElement("div");
        tooltipEl.id = "chartjs-tooltip";
        tooltipEl.innerHTML = "<table></table>";
        document.body.appendChild(tooltipEl);
    }

    // Hide if no tooltip
    if (tooltipModel.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }

    // Set caret Position
    tooltipEl.classList.remove("top", "no-transform");
    if (tooltipModel.yAlign) {
        tooltipEl.classList.add(tooltipModel.yAlign);
    } else {
        tooltipEl.classList.add("no-transform");
    }

    function getBody(bodyItem) {
        return bodyItem.lines;
    }

    // Set Text
    if (tooltipModel.body) {
        var titleLines = tooltipModel.title || [];
        var bodyLines = tooltipModel.body.map(getBody);

        var innerHtml = "<thead>";

        titleLines.forEach(function (title) {
            innerHtml += "<tr><th>" + title + "</th></tr>";
        });
        innerHtml += "</thead><tbody>";

        bodyLines.forEach(function (body, i) {
            var colors = tooltipModel.labelColors[i];
            var style = "background:" + colors.backgroundColor;
            style += "; border-color:" + colors.borderColor;
            style += "; border-width: 2px";
            var span = '<span style="' + style + '"></span>';
            innerHtml += "<tr><td>" + span + body + "</td></tr>";
        });
        innerHtml += "</tbody>";

        var tableRoot = tooltipEl.querySelector("table");
        tableRoot.innerHTML = innerHtml;
    }

    // `this` will be the overall tooltip
    var position = this._chart.canvas.getBoundingClientRect();

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.position = "cursor";
    tooltipEl.style.left =
        position.left +
        window.pageXOffset +
        tooltipModel.caretX +
        "px";
    tooltipEl.style.top =
        position.top +
        window.pageYOffset +
        tooltipModel.caretY +
        "px";
    tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
    tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
    tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
    tooltipEl.style.padding =
        tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
    tooltipEl.style.pointerEvents = "none";
};

/* 3 donut charts */
var donutOptions = {
    cutoutPercentage: 90,
    legend: {
        display: false,
    },
    tooltips: {
        enabled: false,
        mode: 'label',
        position: 'cursor',
        //Set the name of the custom function here
        custom: customTooltips
    }
};

// donut 1
var chDonutData1 = {
    labels: ["KD", "KD"],
    datasets: [
        {
            backgroundColor: ['#5bb9c0', '#eea223'],
            borderWidth: 0,
            data: [30.355, 8.000],
        },
    ],
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
    new Chart(chDonut1, {
        type    : "pie",
        data: chDonutData1,
        options: donutOptions,
    });
}

// donut 2
var chDonutData2 = {
    labels: ["KD", "KD"],
    datasets: [
        {
            backgroundColor: ['#5bb9c0', '#eea223'],
            borderWidth: 0,
            data: [30.501, 20.011],
        },
    ],
};
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
    new Chart(chDonut2, {
        type: "pie",
        data: chDonutData2,
        options: donutOptions,
    });
}

// donut 3
var chDonutData3 = {
    labels: ["KD", "KD", "KD"],
    datasets: [
        {
            backgroundColor: ['#d02b8a', '#5bb9c0', '#eea223'],
            borderWidth: 0,
            data: [31.904, 9.12, 52.314],
        },
    ],
};
var chDonut3 = document.getElementById("chDonut3");
if (chDonut3) {
    new Chart(chDonut3, {
        type: "pie",
        data: chDonutData3,
        options: donutOptions,
    });
}

// donut 4
var chDonutData4 = {
    labels: ["KD", "KD"],
    datasets: [
        {
            backgroundColor: ['#5bb9c0', '#eea223'],
            borderWidth: 0,
            data: [31.904, 30.904],
        },
    ],
};
var chDonut4 = document.getElementById("chDonut4");
if (chDonut4) {
    new Chart(chDonut4, {
        type: "pie",
        data: chDonutData4,
        options: donutOptions,
    });
}

// donut 5
var chDonutData5 = {
    labels: ["KD", "KD"],
    datasets: [
        {
            backgroundColor: ['#5bb9c0', '#eea223'],
            borderWidth: 0,
            data: [9.12, 31.904],
        },
    ],
};
var chDonut5 = document.getElementById("chDonut5");
if (chDonut5) {
    new Chart(chDonut5, {
        type: "pie",
        data: chDonutData5,
        options: donutOptions,
    });
}

// donut 6
var chDonutData6 = {
    labels: ["KD", "KD"],
    datasets: [
        {
            backgroundColor: ['#5bb9c0', '#eea223'],
            borderWidth: 0,
            data: [30.410, 31.904],
        },
    ],
};
var chDonut6 = document.getElementById("chDonut6");
if (chDonut6) {
    new Chart(chDonut6, {
        type: "pie",
        data: chDonutData6,
        options: donutOptions,
    });
}

// donut 7
var chDonutData7 = {
    labels: ["KD", "KD"],
    datasets: [
        {
            backgroundColor: ['#5bb9c0', '#eea223'],
            borderWidth: 0,
            data: [38.355, 38.355],
        },
    ],
};
var chDonut7 = document.getElementById("chDonut7");
if (chDonut7) {
    new Chart(chDonut7, {
        type: "pie",
        data: chDonutData7,
        options: donutOptions,
    });
}