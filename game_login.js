function addUser(){
    p1_name=document.getElementById("player1_name_input").value;
    p2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("p1_name",p1_name)
    localStorage.setItem("p2_name",p2_name)
    window.location="game_page.html"
}