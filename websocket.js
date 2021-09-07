window.onload = function () {
    // let ws = new WebSocket('wss://echo.websocket.org');
    let ws = new WebSocket("ws://localhost:2000");
    let count = 0;
    
    
    // while( !ws.socket || ws.socket.readyState != 1 ){
        //     console.log( count++ );
        // }
        
    // setTimeout(() => {
    //     console.log( ws.socket.readyState );
    //     ws.send('样本数据')
    // }, 6000);


    let ele = document.getElementById("send");
    ele.addEventListener('click', function(e) {
        console.log(666);
        ws.send('样本数据')
        if( ws.socket && ws.socket.readyState == 1 ) {
        }
    })

}