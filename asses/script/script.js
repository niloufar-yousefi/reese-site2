let _rotate = document.getElementById('_rotate')
let _num = 2
let _direction = 180
let _boxMouseMove = _rotate.parentElement.parentElement.parentElement
let _boxMouseMoveTarget = _rotate.parentElement.parentElement
let _main = document.getElementsByTagName('main')[0]
let _mouse = document.getElementById('_mouse')
let _parallax1 = document.getElementById('_parallax1')
let _parallax2 = document.getElementById('_parallax2')
let _parallax3 = document.getElementById('_parallax3')
let _parallax4 = document.getElementById('_parallax4')
let _parallax5 = document.getElementById('_parallax5')
let _viewMouse1 = document.getElementById('_viewMouse1')
let _viewMouse2 = document.getElementById('_viewMouse2')
let _txt = document.querySelectorAll('#_parallax4 h5')
let _clipPath = document.getElementById('_clipPath')
let _h = document.querySelectorAll('._txt1')

//change pic
_rotate.src = `./asses/img/${_num}.webp`
_rotate.nextElementSibling.style.transform = 'perspective(800px) translateX(-50%) translateY(-50%)'
setInterval(() => {
    if (_num == 2) {
        _num = 3
        _direction = -180
    } else {
        _num = 2
        _direction = +180
    }
    _rotate.src = `./asses/img/${_num}.webp`
    _rotate.style.transform = `perspective(800px) rotateX(${+_direction}deg)`
    _rotate.parentElement.style.transform = `perspective(800px) rotateX(${-_direction}deg)`
    if (window.matchMedia('(min-width: 1024px)').matches) {
        _rotate.nextElementSibling.style.transform = `perspective(800px) rotateX(${+_direction}deg) translateX(-50%) translateY(50%)`
    } else {
        _rotate.nextElementSibling.style.transform = `perspective(800px) rotateX(${+_direction}deg) `
    }

}, 4000)


//mousemove 
//part1
if (window.matchMedia('(min-width: 1024px)').matches) {
    _boxMouseMove.addEventListener('mousemove', (event) => {
        let _x = (event.offsetX) / 100
        let _width = (_boxMouseMoveTarget.clientWidth) / 200
        let _y = (event.offsetY) / 100
        let _height = (_boxMouseMoveTarget.clientHeight) / 200
        _boxMouseMoveTarget.style.transform = ` perspective(800px) rotateY(${_x - (_width)}deg) rotateX(${_y - (_height)}deg)  translateX(-50%) translateY(-50%)`
    })

    _boxMouseMove.addEventListener('mouseleave', (event) => {
        _boxMouseMoveTarget.style.transform = ' perspective(800px) rotateY(0deg) rotateX(0deg)  translateX(-50%) translateY(-50%)'
    })
}
//part2
let _div = document.createElement('div')
_div.innerHTML = '<p class= "w-[400%] whitespace-nowrap hover:bg-[#1E2126] hover:text-[rgb(208,255,113)] h-full flex items-center font-Roboto duration-75 text-[#1E2126] myAnimation2 rounded-full overflow-x-hidden ">view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view</p>'
_div.classList.add('hover:bg-[#1E2126]', 'bg-[rgb(208,255,113)]', 'h-[50px]', 'lg:w-[180px]', 'w-[100px]', 'z-40', 'absolute', 'top-[50%]', 'left-[50%]', 'translate-x-[-50%]', 'translate-y-[-50%]', 'opacity-0', 'duration-75', 'scale-0', 'overflow-hidden', 'rounded-full'),
    _viewMouse1.appendChild(_div)
_viewMouse1.addEventListener('mouseenter', () => {
    _div.classList.remove('opacity-0', 'scale-0')
})
_viewMouse1.addEventListener('mouseleave', () => {
    _div.classList.add('opacity-0', 'scale-0')
})

//part3

let _div2 = document.createElement('div')
_div2.innerHTML = '<p class= "w-[400%] whitespace-nowrap hover:bg-[#1E2126] hover:text-[rgb(208,255,113)] h-full flex items-center font-Roboto duration-75 text-[#1E2126] myAnimation2 rounded-full overflow-x-hidden ">view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view view</p>'
_div2.classList.add('hover:bg-[#1E2126]', 'bg-[rgb(208,255,113)]', 'h-[50px]', 'lg:w-[180px]', 'w-[100px]', 'z-40', 'absolute', 'top-[40%]', 'left-[50%]', 'translate-x-[-50%]', 'translate-y-[-50%]', 'opacity-0', 'duration-75', 'scale-0', 'overflow-hidden', 'rounded-full'),
    _viewMouse2.appendChild(_div2)
_viewMouse2.addEventListener('mouseenter', () => {
    _div2.classList.remove('opacity-0', 'scale-0')
})
_viewMouse2.addEventListener('mouseleave', () => {
    _div2.classList.add('opacity-0', 'scale-0')
})

// custome mouse
_mouse.style.opacity = '0'
_main.addEventListener('mousemove', (e) => {
    let x = e.clientX
    let y = e.clientY
    _mouse.style.opacity = '1'
    _mouse.style.top = y + 'px'
    _mouse.style.left = x + 'px'
})

_main.addEventListener('mouseleave', (e) => {
    _mouse.style.opacity = '0'
})


//parallax on scroll

let _clip = 1
_clipPath.style.clipPath = `circle(${_clip}% at 50% 50%)`

window.addEventListener('scroll', () => {

    let _scroll = window.scrollY
    // console.log( _scroll );
    // part0
    let _offsetTop1 = _parallax1.offsetTop
    if ((_scroll - 200) > _offsetTop1) {
        _parallax2.children[0].children[0].children[0].classList.add('onLoadAnimation')
        _parallax2.children[0].children[0].children[0].classList.remove('opacity-0')

    }

    //on part1//   

    _parallax1.classList.toggle('animate-my-custom')
    _parallax1.children[0].children[0].style.top = -(_scroll / 100) + '%'

    //part2 ******//       
    let _offsetTop2 = _parallax2.offsetTop
    if ((_scroll > (_offsetTop2))) {
        _parallax2.children[0].classList.add('fixed', 'top-0')
    } else {
        _parallax2.children[0].classList.remove('fixed', 'top-0')
    }

    //part3 ******//         
    let _h1 = _parallax2.children[0].clientHeight
    if ((_scroll > (_offsetTop2 + _h1))) {
        _parallax2.children[1].classList.add('fixed', 'top-0', 'z-10')
        _parallax2.children[1].classList.remove('relative', 'top-[100vh]')
        _parallax2.children[0].classList.remove('z-0')
    } else {
        _parallax2.children[1].classList.remove('fixed', 'top-0', 'z-10')
        _parallax2.children[1].classList.add('relative', 'top-[100vh]')
        _parallax2.children[0].classList.add('z-0')
    }

    //part4 ******// 
    let _offsetTop4 = _parallax4.offsetTop
    let _h5 = _parallax5.clientHeight
    let _targetScroll = (_scroll - _offsetTop4) - 10
    let _percent = (_targetScroll * 100) / _h5

    if ((_scroll > _offsetTop4 )) {
        //part4 a
        _txt[0].style.transform = `translateX(${_percent-20}%)`
        _txt[1].style.transform = `translateX(${-_percent}%)`
        //  console.log(_percent);
        //part4 b  
         _clip = _percent
        _clipPath.style.clipPath = `circle(${_percent}% at 50% 50%)`
    }

    //par5 ******// 
    
    if (_scroll + 500 > _offsetTop4) {
      _mouse.style.backgroundColor = '#1E2126'
    } else {
        _mouse.style.backgroundColor = 'rgb(208,255,113)'
    }

    //par5 ******// 
    let _offsetTop5 = _parallax5.offsetTop
    
    if (_scroll >= _offsetTop5) {
        console.log(22222222);
       _h[0].classList.add('translate-x-[0]')
       _h[1].classList.add('translate-x-[0]')     
       _h[0].classList.remove('translate-x-[1000%]')
       _h[1].classList.remove('translate-x-[-1000%]') 
      } else {
         _h[0].classList.remove('translate-x-[0]')
         _h[1].classList.remove('translate-x-[0]')
         _h[0].classList.add('translate-x-[1000%]')
         _h[1].classList.add('translate-x-[-1000%]')       
       }
})