document.addEventListener('DOMContentLoaded', function () {
    let next_button = document.getElementById("next");
    let back_button = document.getElementById("back");
    let spotlight = document.getElementsByClassName("spot")[0];
    let anime = document.getElementsByClassName("anime")[0];
    let anime2 = document.getElementsByClassName("anime2")[0];
    let date = document.getElementsByClassName("date")[0];
    let ep = document.getElementsByClassName("episodes")[0];
    let sub = document.getElementsByClassName("subtitle")[0];
    let cont1 = document.getElementsByClassName("content1")[0];
    let cont2 = document.getElementsByClassName("content2")[0];
    let cont3 = document.getElementsByClassName("content3")[0];
    let img = document.getElementsByClassName("image")[0];

    const spotlights = ["#1 spotlight", "#2 spotlight", "#3 spotlight", "#4 spotlight", "#5 spotlight", "#6 spotlight", "#7 spotlight", "#8 spotlight", "#9 spotlight", "#10 spotlight"];
    const anime_names = ["Demon Slayer:Kimetsu no", "One piece", "The Irregular at magic High", "Wind Breaker", "A condition called love", "I was Reincarnated as ", "The New Gate", "Delicious in Dungeon", "Ninja Kamui", "The Apothecary Diarys"];
    const anime2_names = ["yaiba Hashira training arc", "School Season 3"];
    const dates = ["May 12,2024", "Oct 20,1999", "Apr 5,2024", "Apr 5,2024", "Apr 4,2024", "Apr 12,2024", "Apr 14,2024", "Jan 4,2024", "Feb 11,2024", "Oct 22,2023"];
    const eps = ["8", "1112", "13", "13", "12", "12", "12", "24", "13", "24"];
    const subtitle = ["3", "1085", "9", "13", "12", "12", "0", "24", "13", "24"];
    const cont_1 = ["Adaptation of Hashira Training arc.The Hashira,demon slayer", "Gold roger was known as the 'Pirate King' the strongest and most infamous", "Miyuki turns out to be a magical prodigy. However Tatsuya lacks magical prowess", "From an early age haruka Sakura was made in outcast due to his", "Hotaru Hinase se has lived nearly 16 years without romance.She is", "In his first life Prince Lloyd de Saloum who could not", "'The New Gate' is an online life-or-death came with tens of thousands of", "Adventuring night Laois Touden leads a small party through a seamingly", "Joe higan is a Newkenin-a former Ninja who escaped his clan and is", "Maomao an apothecary's doctor, has been plucked from her peaceful"];
    const cont_2 = ["Corp's Highest ranking swordsmen and members.The Hashira training", "being to have sailed the Grand Line.The capture and execution", "prowess and has to rely on his smart and technical know-how instead", "unconventional and lack of social skills.However the rough", "satisfied as long as she can enjoy the little things in life with her", "become adept at magic,no matter how knowledgeable or obessed he", "players.Thank to Shin,the most skilled veteran player,the other players", "endless dungeon,a subterranean maze full of dangerous monsters and", "hiding from his violent past from the rural America with his family.One night he is", "life and sold to lowest echeleons of the imperial court.Now merely a"];
    const cont_3 = ["has begun in order to face the forecoming battle against muzan kibutsuj..", "of Roger by World Government brought a change throughout the.", "This makes him the Irregular at Magic High School.", "treatment turned him into proficient fighter,which is the only thing", "beloved friends and family.In her mind she is not meant to fall in love,no..", "was about it.Now reincarnated into his current royal lineage,he recieves..", "will finally be released from the game.Shin has killed the last boss and ..", "precarios traps.Through the use of advanced magic,an explorer can..", "ambushed by team of assassins from his former organization who exa..", "maid,Mamao settles into her new Mundane life and hides her extensive"];
    const images = ['images/final.jpg', 'images/zl.jpg', 'images/school.jpg', 'images/windbreaker.jpg', 'images/l.jpg', 'images/prince.jpg', 'images/new gate.jpg', 'images/dungeon.jpg', 'images/ninja.jpg', 'images/diary.jpg'];

    let index = 0;
    let autoSlideInterval;

    function updateContent(forward) {
        spotlight.classList.remove('slide-in', 'slide-in-reverse');
        anime.classList.remove('slide-in', 'slide-in-reverse');
        anime2.classList.remove('slide-in', 'slide-in-reverse');
        date.classList.remove('slide-in', 'slide-in-reverse');
        ep.classList.remove('slide-in', 'slide-in-reverse');
        sub.classList.remove('slide-in', 'slide-in-reverse');
        cont1.classList.remove('slide-in', 'slide-in-reverse');
        cont2.classList.remove('slide-in', 'slide-in-reverse');
        cont3.classList.remove('slide-in', 'slide-in-reverse');
        img.classList.remove('slide-in', 'slide-in-reverse');

        // Trigger reflow to restart the animation
        void spotlight.offsetWidth;

        spotlight.innerHTML = spotlights[index];
        anime.innerHTML = anime_names[index];
        if (index == 2) {
            anime2.innerHTML = anime2_names[1];
        } else if (index == 5) {
            anime2.innerHTML = " 7th Prince so I can Take..";
        } else if (index == 0) {
            anime2.innerHTML = "yaiba Hashira Training arc";
        } else {
            anime2.innerHTML = "";
        }
        date.innerHTML = dates[index];
        ep.innerHTML = eps[index];
        sub.innerHTML = subtitle[index];
        cont1.innerHTML = cont_1[index];
        cont2.innerHTML = cont_2[index];
        cont3.innerHTML = cont_3[index];
        img.src = images[index];

        if (forward) {
            spotlight.classList.add('slide-in');
            anime.classList.add('slide-in');
            anime2.classList.add('slide-in');
            date.classList.add('slide-in');
            ep.classList.add('slide-in');
            sub.classList.add('slide-in');
            cont1.classList.add('slide-in');
            cont2.classList.add('slide-in');
            cont3.classList.add('slide-in');
            img.classList.add('slide-in');
        } else {
            spotlight.classList.add('slide-in-reverse');
            anime.classList.add('slide-in-reverse');
            anime2.classList.add('slide-in-reverse');
            date.classList.add('slide-in-reverse');
            ep.classList.add('slide-in-reverse');
            sub.classList.add('slide-in-reverse');
            cont1.classList.add('slide-in-reverse');
            cont2.classList.add('slide-in-reverse');
            cont3.classList.add('slide-in-reverse');
            img.classList.add('slide-in-reverse');
        }
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(function () {
            index = (index + 1) % spotlights.length;
            updateContent(true);
        }, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    next_button.addEventListener('click', function () {
        stopAutoSlide();
        index = (index + 1) % spotlights.length;
        updateContent(true);
    });

    back_button.addEventListener('click', function () {
        stopAutoSlide();
        index = (index - 1 + spotlights.length) % spotlights.length;
        updateContent(false);
    });

    // Start the automatic slide change on page load
    startAutoSlide();
});
