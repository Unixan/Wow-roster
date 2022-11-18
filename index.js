// Model

const roster = [
    {
        name: 'Kælle',
        race: 'Tauren',
        class: 'Druid',
        level: '80',
        spec: 'Protection',
        raidReady: true,
        raidReadyWhen: '',
        joinedOn: '',
    },
    {
        name: 'Unixan',
        race: 'Orc',
        class: 'Warrior',
        level: '1',
        spec: 'Protection',
        raidReady: false,
        raidReadyWhen: '',
        joinedOn: '',
    }
]

// View

function view() {
    let html = /*HTML*/ `
            <table>
                <th>Name</th>
                <th>Race</th>
                <th>Class</th>
                <th style="width: 60px">Level</th>
                <th>Spec</th>
                <th style="width: 100px">Raid Ready?</th>
                <th>Joined</th>


            `;
    for (let i in roster) {
        html += createTable(i)
    }
    html += /*HTML*/`
    </table>
    
    <p>
        <button onclick="addCharacter()">Add character</button>
    </p>
    `
    let rosterTable = document.getElementById('roster');
    rosterTable.innerHTML = html;
}

function createTable(i) {
    const player = roster[i];
    const isReady = player.raidReady ? 'checked="checked"' : '';
    return /*HTML*/`
            <tr>
                <td>${player.name}</td>
                <td>${player.race}</td>
                <td>${player.class}</td>
                <td>${player.level}</td>
                <td>${player.spec}</td>
                <td><input type="checkbox" ${isReady} ${player.raidReadyWhen}/></td>
                <td>${player.joinedOn}</td>
            </tr>
            
    `
}
function addCharacter() {
    html += /*HTML*/ `
    <form>
    <label for="charNameInput">Character Name</label><br>
    <input type="text" id="charNameInput" name="charNameInput"><br>
    `
    let rosterTable = document.getElementById('roster');
    rosterTable.innerHTML = html;
}
// Controller