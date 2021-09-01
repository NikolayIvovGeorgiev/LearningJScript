function areaAndPerimeter(params) {
    let width = +params[0];
    let height = +params[1];

    console.log((width * height).toFixed(2), (2 * (width + height)).toFixed(2));
   
        // let area = (width * height).toFixed(2);
        // let perimeter = (2 * (width + height)).toFixed(2);
        // console.log(area, perimeter);


}
areaAndPerimeter([ '2.5', '3' ]);
areaAndPerimeter([ '5', '5' ]);
areaAndPerimeter([ '3', '4' ]);