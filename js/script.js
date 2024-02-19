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
// Your JavaScript code goes here
document.addEventListener('DOMContentLoaded', function () {
    // Your code to be executed after the DOM is ready
    console.log('DOM is ready!');
});

 // Set viewport width for desktop site mode
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var viewport = document.querySelector("meta[name=viewport]");
            viewport.setAttribute('content', 'width=1024');
        }
