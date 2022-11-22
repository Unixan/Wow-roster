// Model
let html = '';
let createNewChar = true;
let addNewCharacter = 'Add Character';
let roster = [];


// View

function view() {
    addNewCharacter = createNewChar ? 'Add Character' : 'Cancel';
    html = /*HTML*/ `
            <table class="roster">
                <th>Name</th>
                <th>Race</th>
                <th>Class</th>
                <th style="width: 60px">Level</th>
                <th>Spec</th>
                <th>Raid Ready?</th>
                <th>Joined</th>


            `;
    for (let i in roster) {
        html += createTable(i)
    }
    html += /*HTML*/`
    </table>
    
    <p>
        <button onclick="addCharacter()">${addNewCharacter}</button>
    </p>
    `
    let rosterTable = document.getElementById('roster');
    rosterTable.innerHTML = html;
}

function createTable(i) {
    const player = roster[i];
    const isReady = player.raidReady ? '✓ at' : '✗';
    return /*HTML*/`
            <tr>
                <td>${player.name}</td>
                <td>${player.race}</td>
                <td>${player.class}</td>
                <td>${player.level}</td>
                <td>${player.spec}</td>
                <td style="text-align: center;">${isReady} ${player.raidReadyWhen}</td>
                <td>${player.joinedOn}</td>
            </tr>
     `
}

function addCharacter() {
    if (createNewChar === true) {
        createNewChar = !createNewChar;
        view()
        html += /*HTML*/ `
            <table class="newInput">
                <tr>
                    <td><label for="charNameInput">Character Name:</label></td>
                    <td><input type="text" id="charNameInput" name="charNameInput"></td>
                </tr>
                <tr>
                <td><label for="charRaceInput">Your Race:</label></td>
                    <td><select id="charRaceInput" name="charRaceInput">
                            <option value="Tauren">Tauren</option>
                            <option value="Orc">Orc</option>
                            <option value="Blood Elf">Blood Elf</option>
                            <option value="Troll">Troll</option>
                            <option value="Undead">Undead</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label for="classInput">Class:</label></td>
                    <td><select id="classInput" name="classInput">
                            <option value="Warrior">Warrior</option>
                            <option value="Paladin">Paladin</option>
                            <option value="Hunter">Hunter</option>
                            <option value="Rogue">Rogue</option>
                            <option value="Priest">Priest</option>
                            <option value="Shaman">Shaman</option>
                            <option value="Warlock">Warlock</option>
                            <option value="Mage">Mage</option>
                            <option value="Druid">Druid</option>
                            <option value="Death Knight">Death Knight</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label for="level">Level:</label></td>
                    <td><input style=width:200px; 
                            id="level" 
                            name="level" 
                            type="range" 
                            min="1" 
                            max="80" 
                            value="1" 
                            step="1"><output style=float:right;>1</output>
                    </td>
                </tr>
                <tr>
                    <td><label for="specInput">Specialization:</label></td>
                    <td><select id="specInput" name="specInput" value='none'>
                            <option value="Melee DPS">Melee DPS</option>
                            <option value="Ranged DPS">Ranged DPS</option>
                            <option value="Protection">Protection</option>
                            <option value="Healer">Healer</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label for="raidReady">Ready for Raiding?</label></td>
                    <td><input id="raidReady" name="raidReady" type="checkbox">Yes</input></td>
            </table>
            <button onclick="addToObject()">Submit</button>
                `

        let rosterTable = document.getElementById('roster');
        rosterTable.innerHTML = html;
    }
    else if (createNewChar === false) {
        createNewChar = !createNewChar;
        view();

    }

}
// Controller
function addToObject() {
    let objectToPush = {};
    let date = new Date().toLocaleDateString()
    let ischecked = document.querySelector('#raidReady').checked;
    let isRaidReady = ischecked ? date : '';
    objectToPush = {
        name: document.getElementById('charNameInput').value,
        race: document.getElementById('charRaceInput').value,
        class: document.getElementById('classInput').value,
        level: document.getElementById('level').value,
        spec: document.getElementById('specInput').value,
        raidReady: ischecked,
        raidReadyWhen: isRaidReady,
        joinedOn: date,
    }
    roster.push(objectToPush)
    createNewChar = !createNewChar;
    view();
}
