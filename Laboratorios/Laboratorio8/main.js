var rows = [];
var counterId = 0;

var parseLateSwitch = (value) => {
	if (value) {
		return 'Tarde';
	}
	return 'A tiempo';
};

function addRow(carnet, schedule, late, tBody) {
	var nuevoRow = document.createElement('tr');
	var fecha = new Date();

	rows.push({
		id: counterId,
		carnet: carnet,
		schedule: schedule,
		late: late
	});

	nuevoRow.innerHTML = `<td><b>${carnet}<b></td>
    <td>${schedule}</td>
    <td>${fecha.toLocaleString()}</td>
    <td>${late}</td>`;

	var Inputcontenedor = document.createElement('td');
	var cellcontenedor = document.createElement('td');
	var input = document.createElement('input');
	var deleteButton = document.createElement('button');

	input.classList.add('form-control');
	input.id = 'carnet_validator';
	input.type = 'text';
	input.name = 'validator';
	input.maxLength = '8';

	deleteButton.classList.add('btn', 'btn-danger');
	deleteButton.innerText = 'Eliminar';
	deleteButton.value = counterId;

	deleteButton.addEventListener('click', (event) => {
		var idElement = event.srcElement.value;
		var trToDelete = document.querySelector(`button[value='${idElement}']`).parentElement.parentElement;

		if (input.value == carnet) {
            tBody.removeChild(trToDelete);
			rows.forEach((item, index) => {
				if (item.id == idElement) {
					rows.splice(index, 1);
				}
			});
		} else {
			alert('Carnet incorrecto.');
		}
	});

	Inputcontenedor.appendChild(input);
	cellcontenedor.appendChild(deleteButton);
	nuevoRow.appendChild(cellcontenedor);
	nuevoRow.appendChild(Inputcontenedor);
	tBody.appendChild(nuevoRow);
	counterId++;
}

window.onload = function() {

    var submit_btn = document.querySelector('#submit_btn'); 
    var late_switch = document.querySelector('#late_switch');
	var tablaB = document.querySelector('#table_body');
	var carnet = document.querySelector('#carnet_field');
	var horario = document.querySelector('#schedule_field');
	
	var carnetRegex = new RegExp('[0-9]{8}');

	submit_btn.addEventListener('click', () => {
		var carnet = carnet.value;
		var schedule = horario.options[horario.selectedIndex].text;
		var late = parseLateSwitch(late_switch.checked);

		if (carnetRegex.test(carnet)) {
			addRow(carnet, schedule, late, tablaB);
		} else {
			alert('Formato invalido');
		}
	});

	carnet.addEventListener('keyup', (event) => {
		var carnet = carnet.value;

		if (carnetRegex.test(carnet)) {
			submit_btn.disabled = false;
		} else {
			submit_btn.disabled = true;
		}
	});
};