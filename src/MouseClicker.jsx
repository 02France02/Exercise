function MouseClicker({name, children}) {
    function handlePrint(e) {
        e.stopPropagation()
        console.log(e.target.name);
        console.log(e.target.src);
    }
    //Come puoi evitare che l'attributo name del pulsante venga stampato nella console quando si clicca sull'immagine?
    //con e.stopPropagation()
    return (
        <>
          <button style={{width: "200px"}} type="button" onClick={handlePrint} name={name}>{children}</button>
        </>
    )
}
export default MouseClicker