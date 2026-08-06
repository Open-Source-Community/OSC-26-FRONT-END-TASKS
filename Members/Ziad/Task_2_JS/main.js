const toggleButtons = document.querySelectorAll(".b_1");

toggleButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const box = this.parentElement;
        const status = box.querySelector(".stat");

        if (status.textContent == "Status : ✅ Completed") {

            status.textContent = "Status : ⏳ Pending";
            box.style.backgroundColor = "lightgray";

        } else {

            status.textContent = "Status : ✅ Completed";
            box.style.backgroundColor = "lightgreen";

        }

    });

});

const removeButtons = document.querySelectorAll(".b_2");

removeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        this.parentElement.remove();

    });

});