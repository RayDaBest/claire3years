/* ========================================
   Our Love Story - Anniversary Website
   JavaScript Interactivity
   ======================================== */

// ========================================
// Milestone Messages Data
// ========================================
// Edit these messages to personalize your anniversary website!

const milestoneData = {
    1: {
        title: "hard launch to our friends",
        date: "28th October 2023",
        message: `
Hi! So you opened my first message which should go all the way back to when we were in highschool!
I think this was when we literally hard launched to everyone (despite everyone knowing already lol).

The couple fit we did for halloween despite it being not the most extravagous, I really liked the personal touch and simplicity of it.

This was when I realised that year 13 was gonna be such a fun time. Everyday since then, life has been amazing.
    `
    },
    2: {
        title: "cny open house lol",
        date: "10th February 2024",
        message: `
Mannnnn. Meeting your extended family for the first time was actually so scary LOL...
I mean at this point i think its been almost a year we were together but idk it just felt like a new step.
So thats why I have it here as a milestone.
Being accepted so gently and nicely into your family made me feel like I truly belonged (despite me still not being able to speak mandarin at all
I still only know wo bu shi dao and wo shi han quo ren (excuse my spelling HAHAHAHHA)
Unfortunately my family is in korea so even I dont get to see them but I know youll fit right in when you do see them in the future
Ok onto the next!!
`
    },
    3: {
        title: "1st valentines!!",
        date: "14th February 2024",
        message: `OUR FIRST VALENTINES
        haha i struggled so much trying to pick the best restaurant to go.
        my broke year 13 self wanted to go somewhere nice but couldnt spend
        that much money...
        (lol now i can though)
        i actually went through like tripadvisor to pick my restaurant lol
        ofc i dont remember the details of the dinner but i remember the pictures we took and how it was the vibe i was hoping for
        so... the story is only till there. but i was looking through pictures during that time
        and i discovered that picture LOL. dont even remember going to your house after that time lol
        lowkey funny picture though we should recreate it
`
    },
    4: {
        title: "Prom and graduation!!! 💘",
        date: "21st June 2024",
        message: `LOL haha prom and graduation
        i bet youre just glad you got to escape gis or something
        but i honestly really enjoyed this like our parents got to meet each other for the first time
        we could celebrate at prom then go afterparty at kyo then have graduation the next day AND THEN ANOTHER PARTY THAT NIGHT
        i remember like i slept from 5am-5pm and vicky sent you a pic of me as soon as i woke up or something
        but that was really when i felt like i could properly relax and have a good time with you which is what i wanted tbh
        the only regret i had was like not successfully filming the tiktoks we planned during prom
        sorry im very bad at tiktoks but im still glad we tried, just unfortunate there were no like evidence ykwim cause u deleted all of them
        but id say overall it was a 9.1/10 for sure was a memorable moment for us
        `
    },
    5: {
        title: "Best half gap year I could ask for",
        date: "June 2024 - February 2025",
        message: `so now we are at the half gap that we both had. luckily we both did, cause if
        it was just one of us while the other was at uni then wow i dont even know what would happen LOL
        but anyways i felt like time for us went by so fast (at least for me) hopefully u remember these
        or hopefully these kinda like unlock your memories too
        so heres a few reminders of what we did:
• skylugeee was lowkey fun we gotta go again but we should go at night
• u left me to go explore europe
• studied for ielts together (basically just us doing nothing tbh)
• checked out the immersive musem at farenheit 88 (i mean it was kinda boring but you made it fun so)
• celebrated our birthdays!!! and celebrated new years together too!!!
        youve taught me so muc about how to love, what it means to truly be there for someone and really enjoy ourselves as well
        you are my biggest supporter, my best friend and my favourite person!
`
    },
    6: {
        title: "Claire back for her mid-year break",
        date: "June 2025",
        message: `i think at this point we did long distance for a semester and i think we both know that shit was not easy
        which made the 1 month break even more precious. i remember we had a few arguments during the long distance but honestly
        what was pushing me through was just the fact that i could see you again in a few weeks or months so im glad it worked
        you also got to spend some time with vicky too which i liked.. i mean yall get along so well now too so its nice to see
        but then that just makes it so that the send off was harder but i knew if we could do it once we can definitely do it again
        thats just something that summarises our relationship
        `
    },
    7: {
        title: "Nov + Dec 2025",
        date: "Claire back in KL frrr",
        message: `lol my personal barista comes back to KL!! :)
        i mean i was so locked in with my damn exams but im glad i still spent a lot of time with you
        studying while u were at whisk was pretty funny too like i can just do whatever i want to you
        cause im a customer and youre the staff member. we had special date nights in december too which i really enjoyed too
        especially the one we did at that restaurant in 1u that was pretty nice.
        that was also when u kept doing the MM madame morrible flip it around wicked witch LOL
        i mean for us, the relationship only grew stronger since we knew youd be back for like 3 months which was more than enough time
        i feel like now im just doing more of a memory trip than like an anniversary letter LOL
`
    },
    8: {
        title: "Bangkok!!! 💕",
        date: "18th - 20th January 2026",
        message: `who knew our first overseas trip would be on our 1000 day anniversary, thats gotta be fate or something
        this trip was something i will never forget there were too many fun moments but also challenges that were overcome and growths experienced too
        but overall it was definitely a 10/10 if not more
        i feel like through this trip i learnt and discovered more about you as well just the way you do like daily activities or how you go through a day
        learning more about you made me realised why i loved you in the first place and how much of an amazing person you are
        i sometimes worry you think yourself as too low of a person but like you are really so much better than that
        the kidness, humour, your intelligence really do stand out and makes me want to stay with you
        through this trip, you constantly amazed me with various aspects and those 3 days will be something that sticks with me for so long
        `
    },
    9: {
        title: "Ray is finally free🌟",
        date: "January 2026",
        message: `i really think this was an important milestone
        but maybe i should have done this one before the bangkok trip lol
        but because it like overlaps a lot
        so for this segment i added pictures in the gallery section below the roadmap for you to see!
        `
    },
    10: {
        title: "3 year anniversary",
        date: "25th April 2026",
        message: `To the love of my life,

Happy 3rd Anniversary, my dear!
3 years ago, we finally started dating officially. that was the best decision ive made in this life
this was the start of one of the best moments one can experience. honestly, it wasnt something i thought would last this long but im really glad it did
these three years with you have been filled with:
• countless laughs and inside jokes
• adventures big and small
• challenges we've overcome together
• growth, both individual and as a couple
• unconditional love and support

personally, you have done so much to bring me through my hardest moments but also let me enjoy the highs of our experiences
I really dont know where i would be if i had not met you
I want you to know that:
you are my best friend, my confidant, my partner in everything.
you are my home, my safe place, my greatest adventure.
you are my today, my tomorrow, my always.

thank you for choosing me every single day. thank you for loving me through everything.
thank you for being the most amazing partner anyone could ask for.

I love you more today than I did yesterday, and I'll love you even more tomorrow.

With all my love, today and always,
I love you!
- from ray

P.S the gallery pictures below the roadmap were ones I liked but didnt add to the messages itself
`
    }
};

// ========================================
// YouTube Background Music - "Earrings" by Malcolm Todd
// YouTube Video ID: a4tdS3IB294
// ========================================

let isPlaying = false;
let player = null;
let playerReady = false;
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');

// YouTube IFrame API will call this function when ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        height: '1',
        width: '1',
        videoId: 'a4tdS3IB294', // Earrings by Malcolm Todd
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'loop': 1,
            'playlist': 'a4tdS3IB294', // Required for loop to work
            'modestbranding': 1,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    playerReady = true;
    console.log('YouTube player ready - Earrings by Malcolm Todd loaded');
}

function onPlayerStateChange(event) {
    // When video ends, it will loop automatically due to playlist setting
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

function toggleMusic() {
    if (!playerReady) {
        alert('Music is still loading, please wait a moment and try again!');
        return;
    }

    if (isPlaying) {
        player.pauseVideo();
        musicIcon.textContent = '🎵';
        musicToggle.classList.remove('playing');
        isPlaying = false;
    } else {
        player.playVideo();
        musicIcon.textContent = '🔊';
        musicToggle.classList.add('playing');
        isPlaying = true;
    }
}

// Make functions available globally for YouTube API callback
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

// ========================================
// Welcome Screen Functions
// ========================================

function enterWebsite() {
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const mainContent = document.getElementById('mainContent');

    // Fade out welcome overlay
    welcomeOverlay.style.animation = 'fadeOut 0.5s ease forwards';

    // After animation, hide overlay and show main content
    setTimeout(() => {
        welcomeOverlay.style.display = 'none';
        mainContent.classList.remove('hidden');

        // Try to play YouTube music when entering
        if (playerReady && player) {
            player.playVideo();
            isPlaying = true;
            musicIcon.textContent = '🔊';
            musicToggle.classList.add('playing');
        }

        // Initialize scroll animations
        initScrollAnimations();
    }, 500);
}

// Add fadeOut keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// ========================================
// Milestone Modal Functions
// ========================================

function openMilestone(milestoneNumber) {
    const modal = document.getElementById('milestoneModal');
    const data = milestoneData[milestoneNumber];

    if (data) {
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalDate').textContent = data.date;
        document.getElementById('modalMessage').textContent = data.message;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeMilestone() {
    const modal = document.getElementById('milestoneModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('milestoneModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeMilestone();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMilestone();
    }
});

// ========================================
// Scroll Animations
// ========================================

function initScrollAnimations() {
    const milestones = document.querySelectorAll('.milestone');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    milestones.forEach(milestone => {
        observer.observe(milestone);
    });
}

// ========================================
// Image Placeholder Click Handler
// ========================================

document.querySelectorAll('.image-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', function(e) {
        // Prevent opening milestone when clicking on milestone images
        e.stopPropagation();

        const label = this.getAttribute('data-label');
        console.log(`Image placeholder clicked: ${label}`);
        console.log('To add your image:');
        console.log('1. Replace the placeholder div with an <img> tag');
        console.log('2. Example: <img src="your-image.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover;border-radius:15px;">');
    });
});

// ========================================
// Parallax Effect for Header (Optional)
// ========================================

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        const scrolled = window.pageYOffset;
        header.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// ========================================
// Console Welcome Message
// ========================================

console.log('%c💕 Our Love Story 💕', 'font-size: 24px; color: #B8D4E3; font-weight: bold;');
console.log('%cWelcome to our anniversary website!', 'font-size: 14px; color: #8BB8D0;');
console.log('%cTo customize:', 'font-size: 12px; color: #718096;');
console.log('1. Edit the milestoneData object in code.js to add your personal messages');
console.log('2. Replace image placeholders with your actual photos');
console.log('3. Add your own background music (replace the audio source in index.html)');
console.log('%c❤️ Made with love ❤️', 'font-size: 14px; color: #F2D4DC;');