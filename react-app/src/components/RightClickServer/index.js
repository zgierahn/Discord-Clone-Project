
// <div
// className="App"
// onContextMenu={(e) => {
// e.preventDefault();
// setClicked(true);
// setPoints({
// x: e.pageX,
// y: e.pageY,
// });
// console.log("Right Click", e.pageX, e.pageY,points.x);
// }}>
// {clicked && (
// <div className='App' style={{top:`${points.y}px`,left:`${points.x}px`}}>
// <ul >
// <li>Edit</li>
// <li>Delete</li>
// </ul>
// </div>
// )}


function RightClickServer() {



    return (
        <ul>
            className="App"
      onContextMenu={(e) => {
        e.preventDefault();
        setClicked(true);
        setPoints({
          x: e.pageX,
          y: e.pageY,
        });
        console.log("Right Click", e.pageX, e.pageY,points.x);
      }}

{clicked && (
        <div className='App' style={{top:`${points.y}px`,left:`${points.x}px`}}>
          <ul >
            <li>Edit</li>
            <li>Delete</li>
          </ul>
        </div>
      )}
          </ul>

    )
}

export default RightClickServer
