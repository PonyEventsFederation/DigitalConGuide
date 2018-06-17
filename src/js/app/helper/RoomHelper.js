const RoomMap = {
    "main": "Main Hall (Theatersaal)",
    "foyer": "Foyer",
    "room1": "Panel Room I (Silchersaal)",
    "room2": "Panel Room II (Bürgersaal II)",
    "party": "Party Hall (Bürgersaal I)",
    "workshop": "Workshop Room",
    "ccg": "Card Game Room",
    "buckball": "Buckball Field"
};

class RoomHelper {
    static getRoomName(room) {
        return RoomMap[room] || "";
    }
}

export default RoomHelper;