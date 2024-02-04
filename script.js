document.addEventListener('DOMContentLoaded', function () {
        const headDishes = document.querySelectorAll('.head-dish');

        headDishes.forEach(headDish => {
            headDish.addEventListener('click', function () {
                const subDishes = this.nextElementSibling;
                toggleSubDishes(subDishes);

            });
        });
    });
function toggleSubDishes(subDishes) {
    subDishes.classList.toggle('collapsed');
    
    // Hide other open sub-dishes before showing the selected one
    const allSubDishes = document.querySelectorAll('.sub-dishes');
    allSubDishes.forEach(dish => {
        if (dish !== subDishes && !dish.classList.contains('collapsed')) {
            dish.classList.add('collapsed');
        }
    });
}
