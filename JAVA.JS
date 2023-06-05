
    function createParagraph(){
        const para=document.createElement('p');
        para.textContent= 'KSF Kingdom Seekers Fellowship is an Apostolic Church founded on true Biblical Teachings and Christian Principles, Holy Spirit empowered and driven. The church theme has been drawn from Christ’s teaching as amplified in Matthew 6:33 ‘ BUT SEEK YE FIRST THE KINGDOM OF GOD AND HIS RIGHTEOUSNESS AND ALL OTHER THINGS SHALL BE ADDED UNTO YOU’. Kingdom Seekers Fellowship was founded 12 years ago by Apostle John Kimani William together with His Wife Rev. Naomi Kimani who since then have continued to minister the word of God to an ever growing congregation . The Ministry is Headquartered in Nakuru Town with over 20 Branches Spreading across the country. The main Mission of Kingdom Seekers Fellowship is to transform Lives by seeking God and making Him Known.KAYOLE, located';
        document.body.appendChild(para);
    }
    const buttons=document.querySelectorAll('button');
    for(const button of buttons){
        button.addEventListener('click',createParagraph);//
    }
    const person ={
FirstName : "Elvis",
SecondName: "Kisina",
Email: "elviskisina",
phoneNumber: "0707976645",

    }
    document.getElementById("demo").innerHTML=person.FirstName  + " " +  person.SecondName + " his number is " + person.phoneNumber;



    const hour= new Date().getHours();
    let message; 
    if (hour >12) {  
        message="Good morning 1234";
    }
    else{
message="Good evening1234";

    }

        
document.getElementById("elvis").innerHTML= message;

