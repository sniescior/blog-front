const interestSelectOptions = document.getElementById('interest-select-options')
const interestDropdownList = document.getElementById('interest-dropdown-list')
const interestDropdownValue = document.getElementById('interest-dropdown-value')
const interestOptions = Array.from(interestSelectOptions.parentElement.children[0])

window.addEventListener('load', () => {

    interestOptions.forEach(element => {
        interestDropdownList.insertAdjacentHTML(
            'beforeend', 
            `<li class="dropdown-list-item" onclick="selectOption(this, 'interest-select-options', 'interest-dropdown-value')" data-value="${element.value}"><div class="checkbox"></div>${element.innerHTML}</li>`
        )
    })

    interestDropdownValue.innerHTML = interestDropdownList.children[0].innerHTML
    
    interestDropdownList.children[0].classList.add('selected')
})

const selectOption = (dropdownItem, dropdownSelectID, dropdownValueID) => {

    // dropdownItem -> clicked list item (aka the value user has clicked)

    // dropdownSelectID -> ID of the actual select element which value has to get updated
    const dropdownSelect = document.getElementById(dropdownSelectID)

    // dropdownValueID -> user friendly select visualisation element's ID
    const dropdownValue = document.getElementById(dropdownValueID)

    // DropdownValue.data-value needs to be assigned to dropdownSelect and dropdownValue when user selects an option
    dropdownValue.innerHTML = dropdownItem.innerHTML

    // Updating the actual select element value with clicked element's data-value
    dropdownSelect.value = dropdownItem.dataset.value

    // Remove selected class from every option that has it, in order to add the class to the finally selected element
    Array.from(interestDropdownList.children).forEach(element => element.classList.remove('selected'))

    dropdownItem.classList.add('selected')
}

const toggleDropdown = (dropdownValue) => {
    console.log('Clicked');
    const dropdownElement = dropdownValue.parentElement
    console.log(dropdownElement);
    dropdownElement.classList.toggle('opened')
}
