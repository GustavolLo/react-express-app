export const defaultState = {
    users: [{
        id: "U1",
        name: "Dev"
    }],
    groups: [{
        name: "To Do",
        id: "G1",
        owner: "U1"
    },
    {
        name: "To Finish",
        id: "G2",
        owner: "U1"
    }],
    tasks: [{
        name: "Do tests",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: false
    },
    {
        name: "Finish exam",
        id: "T2",
        group: "G2",
        owner: "U1",
        isComplete: false
    },
    {
        name: "Finish cart",
        id: "T3",
        group: "G2",
        owner: "U1",
        isComplete: false
    }],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Great work!!!"
    }]
}