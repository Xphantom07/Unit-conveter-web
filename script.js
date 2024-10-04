var Lengthbtn = document.getElementById("Lengthbtn");
            var Areabtn = document.getElementById("Areabtn");
            var weightbtn = document.getElementById("weightbtn");
            var Volumebtn = document.getElementById("Volumebtn");
            var tempbtn = document.getElementById("tempbtn");

            var Lengthbox = document.getElementById("LengthBox");
            var Areabox = document.getElementById("AreaBox");
            var weightbox = document.getElementById("weightBox");
            var Volumebox = document.getElementById("VolumeBox");
            var tempbox = document.getElementById("TempBox");

            Lengthbtn.classList.add('pressed');
            Lengthbox.classList.add('active');

            function hideAll(){
                Lengthbox.classList.remove('active');
                Areabox.classList.remove('active');
                weightbox.classList.remove('active');
                Volumebox.classList.remove('active');
                tempbox.classList.remove('active');
            }
            function unpressall(){
                Lengthbtn.classList.remove('pressed');
                Areabtn.classList.remove('pressed');
                weightbtn.classList.remove('pressed');
                Volumebtn.classList.remove('pressed');
                tempbtn.classList.remove('pressed');
            }

            Lengthbtn.addEventListener('click', ()=>{
                hideAll();
                unpressall();
                Lengthbox.classList.add('active');
                Lengthbtn.classList.add('pressed');
            });
            Areabtn.addEventListener('click', ()=>{
                hideAll();
                unpressall();
                Areabox.classList.add('active');
                Areabtn.classList.add('pressed');
            });
            weightbtn.addEventListener('click', ()=>{
                hideAll();
                unpressall();
                weightbox.classList.add('active');
                weightbtn.classList.add('pressed');
            });
            Volumebtn.addEventListener('click', ()=>{
                hideAll();
                unpressall();
                Volumebox.classList.add('active');
                Volumebtn.classList.add('pressed');
            });
            tempbtn.addEventListener('click', ()=>{
                hideAll();
                unpressall();
                tempbox.classList.add('active');
                tempbtn.classList.add('pressed');
            });
