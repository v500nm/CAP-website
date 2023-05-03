var ctx = document.getElementById('myChart').getContext("2d");

var myChart = new Chart(ctx, {
    type:"bar",
    data:{
        labels:["Rescue", "Rehab", "Volunter", "Event"],
        datasets: [
            {
                data: [362, 74, 102, 17],
                label:"Hands On", 
                backgroundColor: ["#5BB9CE", "#EEDA25", "#E24DCA", "#81C768"],
                // borderColor:["black", "red", "blue", "pink", "black"],
                borderWidth:3,
            },
        ],
    },
})