    const icon = document.querySelector('.icon');
    const arrow = document.querySelector('.arrow');

    arrow.animate([
    {left: '0' },
    {left: '5px' },
    {left: '0' }
    ], {
        duration: 700,
    iterations: Infinity
    });
    const icon2 = document.querySelector('.icon2');
    const arrow2 = document.querySelector('.arrow2');

    arrow2.animate([
    {left: '0' },
    {left: '2px' },
    {left: '0' }
    ], {
        duration: 700,
    iterations: Infinity
    });
