// //old way//
// $(document).ready(function(e){
//     //jquery code block
// });

// //new way//
// $(function(e){
//     //jquery code block
// });

// //or

// $(()=>{
//     //jquery code block
// });

//--------------------------

$(()=>{

    // let result = $('div'); //searching for a tag

    // let para = $('#paragraph');

    let $img = $('.image'); //good practice

    // console.log(result);
    // console.log(para);
    console.log($img);

    // $('div').html("<span style='background-color: yellow; font-size: 30px;'>This is a great day</span>");

    let $a = $('<a>', { //< > to create a tag
        'class': 'myAnchor',
        'text': 'Digital Crafts',
        'href': 'https://pbs.twimg.com/media/Dv6tcmIXQAYhZMH.jpg'
    });

    $('body').append($a);

    let $image = $('<img>', {
        'src': 'https://i.pinimg.com/originals/a2/e5/57/a2e557b32291f380a3faa4c433d5fb99.jpg',
        'alt': 'wuffer',
    });

    // $('div').append($image);

    $('p').removeClass('image');

    // $('p').click(()=>{
    //     alert('you clicked on yellow box.');
    // });

    // $('body').on('click', ()=>{
    //     alert('hello');
    // });

    // $('body').keydown((e)=>{
    //     console.log(e.keyCode);
    // });
    let $inputCount = $('input')
    $('input').keyup((e)=>{
        console.log($inputCount.val().length);
        $('#count').html($inputCount.val().length);
    });
    
$('#aButton').click((e)=>{
    $('.animation').fadeToggle(1000);
    // $('textarea').toggle();
});

$('#aButtonShow').click((e)=>{
        $('textarea').show();
});

});
