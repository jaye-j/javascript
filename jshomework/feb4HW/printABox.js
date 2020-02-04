function printBox(width, height){
    console.log('*'.repeat(width));
    for (let i = 0; i < height - 2; i++){
        console.log('*' + ' '.repeat(width - 2) + '*');
    }
    console.log('*'.repeat(width));

};

printBox(5, 6);