class DialogueTree {
    constructor() {
        this.dialogues = {
            "sheet1": {
                "1_1": "Conversation 1",
                "1_2": "Conversation 2",
                "2_1": "Conversation 3",
            },
            "sheet2": {
                "1_1": "Another Conversation 1",
                "1_2": "Another Conversation 2",
            },
        };
    }

    getConversation(sheet, row, col) {
        return this.dialogues[sheet] ? this.dialogues[sheet][`${row}_${col}`] || "Conversation not found" : "Sheet not found";
    }
}

const dialogueTree = new DialogueTree();
let currentSheet = "sheet1";
let currentRow = 1;
let currentCol = 1;

// Function to update dialogue text
function updateDialogue() {
    const dialogueText = dialogueTree.getConversation(currentSheet, currentRow, currentCol);
    document.getElementById("dialogue-text").textContent = dialogueText;
}

// Initialize the first conversation
updateDialogue();

document.getElementById("next-button").addEventListener("click", () => {
    currentCol++;
    const dialogueText = dialogueTree.getConversation(currentSheet, currentRow, currentCol);
    if (dialogueText === "Conversation not found") {
        currentRow++;
        currentCol = 1;
    }
    updateDialogue();
});
