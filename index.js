// Model
let html = '';
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
    html = /*HTML*/ `
            <table class="roster">
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
                <td><input type="checkbox" ${isReady}/>${player.raidReadyWhen}</td>
                <td>${player.joinedOn}</td>
            </tr>
            
    `
}
function addCharacter() {
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
// Controller
function addToObject() {
    let objectToPush = {};
    let date = new Date().toLocaleDateString()
    let ischecked = document.querySelector('#raidReady').checked;
    let isRaidReady = ischecked ? date : '';
   
    console.log(ischecked)
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
    console.log(objectToPush)
    roster.push(objectToPush)
    console.log(roster)
    view()


}

/*name: 'Unixan',
  race: 'Orc',
  class: 'Warrior',
  level: '1',
  spec: 'Protection',
  raidReady: false,
  raidReadyWhen: '',
  joinedOn: '', */