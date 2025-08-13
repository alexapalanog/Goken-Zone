
import './index.css';

const root = document.getElementById('root');

// --- SVG ICONS ---

// The user's specific avatar
const AvatarIcon = () => `
<svg viewBox="0 0 26 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="avatar-svg">
    <defs>
        <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#D946EF" />
            <stop offset="100%" stop-color="#8B5CF6" />
        </linearGradient>
    </defs>
    <path d="M13 10C15.2091 10 17 8.20914 17 6C17 3.79086 15.2091 2 13 2C10.7909 2 9 3.79086 9 6C9 8.20914 10.7909 10 13 10Z" fill="url(#avatarGradient)"/>
    <path d="M6 8V4H4V8H0V12H4V18H6V12H10V8H6Z" transform="translate(2 0)" fill="url(#avatarGradient)"/>
    <path d="M6 8V4H4V8H0V12H4V18H6V12H10V8H6Z" transform="translate(14 0)" fill="url(#avatarGradient)"/>
    <rect x="11" y="11" width="4" height="12" fill="url(#avatarGradient)"/>
    <rect x="8" y="22" width="10" height="4" fill="url(#avatarGradient)"/>
    <rect x="5" y="25" width="4" height="15" rx="2" fill="url(#avatarGradient)"/>
    <rect x="17" y="25" width="4" height="15" rx="2" fill="url(#avatarGradient)"/>
</svg>
`;

const avatarSVGs = {
    Aria: AvatarIcon(),
    Luna: `<svg viewBox="0 0 48 48"><defs><linearGradient id="luna-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fbcfe8"/><stop offset="100%" stop-color="#fce7f3"/></linearGradient><filter id="luna-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g filter="url(#luna-glow)"><circle cx="24" cy="24" r="20" fill="url(#luna-grad)"/><path d="M24 12 c-5.52 0-10 4.48-10 10 0 1.81.48 3.5 1.34 5-3.12 1.5-5.34 4.79-5.34 8.5h28c0-3.71-2.22-7-5.34-8.5.86-1.5 1.34-3.19 1.34-5 0-5.52-4.48-10-10-10z" fill="#f472b6"/><circle cx="18" cy="24" r="2.5" fill="#fff"/><circle cx="30" cy="24" r="2.5" fill="#fff"/><path d="M21 31 s2 2 6 0" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></g></svg>`,
    Leo: `<svg viewBox="0 0 48 48"><defs><linearGradient id="leo-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7dd3fc"/><stop offset="100%" stop-color="#0ea5e9"/></linearGradient></defs><circle cx="24" cy="24" r="22" fill="#e0f2fe"/><path fill="url(#leo-grad)" d="M24 6 C14.06 6 6 14.06 6 24 s8.06 18 18 18 18-8.06 18-18 S33.94 6 24 6z M24 12.5 c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z M32 32 H16 c-1.1 0-2-0.9-2-2 s0.9-2 2-2 h16 c1.1 0 2 0.9 2 2s-0.9 2-2 2z"/></svg>`,
    Mia: `<svg viewBox="0 0 48 48"><defs><linearGradient id="mia-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d8b4fe"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient></defs><rect x="4" y="4" width="40" height="40" rx="24" fill="url(#mia-grad)"/><path d="M18 18h12v12H18z" fill="#f3e8ff" transform="rotate(45 24 24)"/><circle cx="18" cy="21" r="2.5" fill="white"/><circle cx="30" cy="21" r="2.5" fill="white"/><path d="M20 29 q4-4 8 0" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
    Zane: `<svg viewBox="0 0 48 48"><defs><linearGradient id="zane-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#10b981"/></linearGradient></defs><path d="M24 2 L46 24 L24 46 L2 24 Z" fill="url(#zane-grad)"/><rect x="18" y="18" width="12" height="6" fill="#a7f3d0"/><rect x="18" y="28" width="12" height="2" fill="#a7f3d0"/></svg>`,
    Kai: `<svg viewBox="0 0 48 48"><defs><linearGradient id="kai-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#f97316"/></linearGradient></defs><g transform="translate(4,4)"><path d="M20 0 C31.046 0 40 8.954 40 20 C40 31.046 31.046 40 20 40 C8.954 40 0 31.046 0 20 C0 8.954 8.954 0 20 0 Z" fill="#fef3c7"/><path d="M20 8 C14.477 8 10 12.477 10 18 L16 18 C16 15.791 17.791 14 20 14 C22.209 14 24 15.791 24 18 L30 18 C30 12.477 25.523 8 20 8Z" fill="url(#kai-grad)"/><circle cx="15" cy="26" r="3" fill="url(#kai-grad)"/><circle cx="25" cy="26" r="3" fill="url(#kai-grad)"/></g></svg>`,
    Nia: `<svg viewBox="0 0 48 48"><defs><linearGradient id="nia-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f43f5e"/><stop offset="100%" stop-color="#be123c"/></linearGradient></defs><circle cx="24" cy="24" r="22" fill="#ffe4e6"/><path fill="url(#nia-grad)" d="M12 24 C12 17.373 17.373 12 24 12 C30.627 12 36 17.373 36 24 C36 27.098 34.697 29.89 32.66 31.85 C30.73 34.85 27.58 37 24 37 C20.42 37 17.27 34.85 15.34 31.85 C13.303 29.89 12 27.098 12 24 Z"/><path d="M19 22 l-4 4 l4 4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M29 22 l4 4 l-4 4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
};

const avatarAccessories = [
    { id: 'acc1', name: 'Cool Shades', svg: `<path d="M8 20 L2 22 L2 26 L12 24 L14 24 L24 26 L24 22 L18 20 L16 20 Z M6 16 H10 V20 H6z M16 16 H20 V20 H16z" fill="black" opacity="0.8"/>` },
    { id: 'acc2', name: 'Top Hat', svg: `<path d="M4 11 L22 11 L20 4 L6 4 Z M6 12 H20 V14 H6Z" fill="#333"/>` },
    { id: 'acc3', name: 'Headphones', svg: `<path d="M2 12 A11 11 0 0 1 24 12" stroke-width="3" stroke="#555" fill="none"/> <rect x="0" y="12" width="5" height="8" rx="2" fill="#777"/> <rect x="21" y="12" width="5" height="8" rx="2" fill="#777"/>` },
    { id: 'acc4', name: 'Scarf', svg: `<path d="M6 38 L20 38 L22 28 L4 28 Z" fill="#E53E3E"/> <path d="M20 38 L22 28 L24 30 L22 40 Z" fill="#C53030"/>` },
    { id: 'acc5', name: 'Crown', svg: `<path d="M4 14 L8 6 L13 10 L18 6 L22 14Z" fill="#FFD700" stroke="#FBBF24" stroke-width="1"/>` },
    { id: 'acc6', name: 'Monocle', svg: `<circle cx="17" cy="6" r="4" stroke="#333" stroke-width="1.5" fill="none"/><line x1="21" y1="7" x2="24" y2="9" stroke="#333" stroke-width="1.5"/>` },
    { id: 'acc7', name: 'Bowtie', svg: `<path d="M10 24 L6 20 L6 28 Z M16 24 L20 20 L20 28 Z" fill="#3B82F6"/>` },
    { id: 'acc8', name: 'Flower', svg: `<circle cx="5" cy="5" r="3" fill="#EC4899"/> <circle cx="5" cy="5" r="1.5" fill="#FBBF24"/>` },
];

const StatIcons = {
    Games: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`,
    Badges: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L4.5 5.5v7.2c0 4.8 3.4 9.3 7.5 10.3 4.1-1 7.5-5.5 7.5-10.3V5.5L12 2z"></path></svg>`,
    Friends: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    Level: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>`,
    Streak: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="progress-icon"><path d="M17.22 9.22a4.5 4.5 0 0 0-6.36-6.36l-3.36 3.36 6.36 6.36 3.36-3.36z"></path><path d="M17.66 12.66l-6.36-6.36-1.06 1.06a4.5 4.5 0 0 0 6.36 6.36l1.06-1.06z"></path><path d="M11.3 20.3a2 2 0 0 1-2.83 0l-2-2a2 2 0 0 1 0-2.83l6.58-6.58"></path></svg>`,
    Rank: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="progress-icon"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17h4v-2.34"></path><path d="M10 9h4"></path><path d="M12 17v5"></path><path d="M12 4V2"></path></svg>`,
    Played: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="progress-icon"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 12h4m4 0h4m-6-3v6"></path></svg>`,
    Items: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
};

const ShareIcon = () => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`;

const AnimatedHeartIcon = () => `
<div class="cause-icon-wrapper">
    <svg class="cause-envelope" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 13.5V8.25C22 7.00736 20.9926 6 19.75 6H4.25C3.00736 6 2 7.00736 2 8.25V17.75C2 18.9926 3.00736 20 4.25 20H12" stroke="#C5306C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 8.25L12 14.25L2 8.25" stroke="#C5306C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <svg class="cause-heart" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.44,3.1A5.3,5.3,0,0,0,12,5.26,5.3,5.3,0,0,0,7.56,3.1,5.29,5.29,0,0,0,2,8.44c0,4.42,7.22,9.6,9.55,11.2a.7.7,0,0,0,.9,0C14.78,18,22,12.86,22,8.44A5.29,5.29,0,0,0,16.44,3.1Z" fill="#FF5A92"/></svg>
</div>
`;


const QuickActionIcons = {
    Pay: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
    Voucher: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5a5 5 0 1 1 19 0V18a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2Z"></path><path d="M2.5 7.5h19"></path><path d="M14 12.5a2.5 2.5 0 0 0-5 0"></path><path d="m14 12.5-5 0"></path></svg>`,
    Shop: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"></path><path d="M2 7h20"></path></svg>`
};

const gokenNavIcons = {
    Home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
    Game: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path><path d="M16.5 8.5L18 7l-1.5-1.5"></path><path d="M8 12h.01"></path><path d="M12 12h.01"></path><path d="M16 12h.01"></path><path d="M2 16h.01"></path><path d="M6 16.01h.01"></path><path d="M10 16h.01"></path></svg>`,
    Friends: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="17" y1="11" x2="23" y2="11"></line></svg>`,
    Profile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
};

const GiftIcon = () => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C9.8 2 12 4.2 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C14.2 2 12 4.2 12 7z"></path></svg>`;

const MysteryBoxWithRibbonIcon = () => `
<div class="mystery-box-gift">
    <svg class="gift-box" viewBox="0 0 50 50">
        <rect class="box" x="5" y="15" width="40" height="30" fill="#a855f7"/>
        <rect class="lid" x="2" y="10" width="46" height="5" fill="#c084fc"/>
    </svg>
    <svg class="gift-ribbon" viewBox="0 0 50 50">
        <path class="ribbon-v" d="M25,10 V45" stroke="#f472b6" stroke-width="4"/>
        <path class="ribbon-bow" d="M15,10 C 5,0 15,5 25,10" fill="none" stroke="#f472b6" stroke-width="4" stroke-linecap="round"/>
        <path class="ribbon-bow" d="M35,10 C 45,0 35,5 25,10" fill="none" stroke="#f472b6" stroke-width="4" stroke-linecap="round"/>
    </svg>
</div>
`;

const TenPullMysteryBoxWithRibbonIcon = () => `
<div class="mystery-box-gift ten-pull">
     <svg class="gift-box" viewBox="0 0 50 50">
        <rect class="box" x="5" y="15" width="40" height="30" fill="#facc15"/>
        <rect class="lid" x="2" y="10" width="46" height="5" fill="#fde047"/>
    </svg>
    <svg class="gift-ribbon" viewBox="0 0 50 50">
        <path class="ribbon-v" d="M25,10 V45" stroke="#fb923c" stroke-width="4"/>
        <path class="ribbon-h" d="M2,18 H48" stroke="#fb923c" stroke-width="4"/>
        <path class="ribbon-bow" d="M15,10 C 0,-5 15,5 25,10" fill="none" stroke="#fb923c" stroke-width="4" stroke-linecap="round"/>
        <path class="ribbon-bow" d="M35,10 C 50,-5 35,5 25,10" fill="none" stroke="#fb923c" stroke-width="4" stroke-linecap="round"/>
    </svg>
</div>
`;

// --- DATA ---
const allGames = [
    {
        name: 'Stamp Rally',
        description: 'Complete daily tasks to collect unique stamps!',
        imageUrl: 'https://media.discordapp.net/attachments/1077977791594762375/1405098124313104394/3.png?ex=689d971a&is=689c459a&hm=7f09b48810ac560a6d0df0549016f05a7ac99e2fd3c24b909f3b71774ce4e90e&=&format=webp&quality=lossless&width=573&height=810',
        timer: '149d 10h 5m'
    },
    {
        name: 'Gift Reveal',
        description: 'Choose a mystery box and reveal your amazing prize.',
        imageUrl: 'https://media.discordapp.net/attachments/1077977791594762375/1405098122970927145/1.png?ex=689d9719&is=689c4599&hm=57ce9b0b01f65d1eff70b22a1b8efbbf2c84bcdeb0c3b539a701886a51adf275&=&format=webp&quality=lossless&width=573&height=810',
        timer: '121d 8h 15m'
    },
    {
        name: 'Spin To Win',
        description: 'Spin the wheel for a chance at the daily jackpot.',
        imageUrl: 'https://media.discordapp.net/attachments/1077977791594762375/1405098123692609656/2.png?ex=689d971a&is=689c459a&hm=3f1f1b05c352a7f1516cbabc83a6c941feb6c76545221f2139a1e12427e3cb41&=&format=webp&quality=lossless&width=573&height=810',
        timer: '105d 4h 30m'
    },
    {
        name: 'Trivia Dash',
        description: 'Test your knowledge in a race against the clock!',
        imageUrl: 'https://media.discordapp.net/attachments/1077977791594762375/1405111845693685881/5.png?ex=689da3e1&is=689c5261&hm=d60af5d1fcf805e9bb030ce305aa8013b356ddf4e1ccdb1a780b1f05f4133903&=&format=webp&quality=lossless&width=573&height=810',
        timer: '90d 12h 0m'
    },
    {
        name: 'Puzzle Rush',
        description: 'Solve intricate puzzles under pressure.',
        imageUrl: 'https://media.discordapp.net/attachments/1077977791594762375/1405111847191056414/7.png?ex=689da3e2&is=689c5262&hm=e469a3e031bd726702383e992179566be8c2f92bb72af9510c62cb239459a4bd&=&format=webp&quality=lossless&width=573&height=810',
        timer: '62d 2h 45m'
    },
    {
        name: 'Beat the Beat',
        description: 'A rhythm game to test your musical reflexes.',
        imageUrl: 'https://media.discordapp.net/attachments/1077977791594762375/1405111848524709979/4.png?ex=689da3e2&is=689c5262&hm=40bc1a2d183029827e9f429cc0f7c85273646e569ca8bee5f9492fac11459100&=&format=webp&quality=lossless&width=573&height=810',
        timer: '48d 18h 22m'
    },
    {
        name: 'Word Hunt',
        description: 'Find hidden words in a grid of letters.',
        imageUrl: 'https://media.discordapp.net/attachments/1077977791594762375/1405111849569222668/6.png?ex=689da3e2&is=689c5262&hm=3a08847d356e8e20fa197e1417217d10da6c1737876bdb931b8ad33c5c640a22&=&format=webp&quality=lossless&width=573&height=810',
        timer: '31d 5h 55m'
    }
];

const badgesData = [
    { id: 'b1', name: 'First Bloom', description: 'Won your first game!', unlocked: true, svgIcon: `<svg viewBox="0 0 24 24"><path fill="#f43f5e" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.88 14.88c-.14.14-.33.22-.53.22s-.39-.08-.53-.22L4 9.17l1.06-1.06 6.36 6.36 5.3-5.3 1.06 1.06-6.36 6.36z" transform="scale(0.8) translate(3 3)"/><path fill="#fecdd3" d="M12 10.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path fill="#e11d48" d="M12 5.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/><path fill="#fda4af" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>` },
    { id: 'b2', name: 'Social Bunny', description: 'Added 5 new friends.', unlocked: true, svgIcon: `<svg viewBox="0 0 64 64"><path fill="#FFF0F5" d="M32 2C19.8 2 10 11.8 10 24c0 8 5.6 14.8 13 17.2V54c0 4.4 3.6 8 8 8s8-3.6 8-8V41.2c7.4-2.4 13-9.2 13-17.2C54 11.8 44.2 2 32 2z"/><path fill="#FFD6E7" d="M22 24c0-5.5 4.5-10 10-10s10 4.5 10 10c0 4.4-2.8 8.1-6.7 9.5.2-.5.3-1 .3-1.5 0-2.8-2.2-5-5-5s-5 2.2-5 5c0 .5.1 1 .3 1.5-3.9-1.4-6.7-5.1-6.7-9.5z"/><path fill="#C5306C" d="M26 30c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path fill="none" stroke="#C5306C" stroke-width="2" stroke-linecap="round" d="M30 38c.6 1.2 1.8 2 3 2s2.4-.8 3-2"/></svg>` },
    { id: 'b3', name: 'Cherry on Top', description: 'Sent gifts 3 days in a row.', unlocked: true, svgIcon: `<svg viewBox="0 0 24 24"><path fill="#4ade80" d="M15 5c-3.9-2.3-9 .4-9 4 0 1.5.7 3 1.8 3.9.7-2.3 2.8-4 5.2-4 1 0 1.9.3 2.7.8-.3-1.6-.5-3.1-.7-4.7z"/><path fill="#ef4444" d="M8.5 10C5.5 10 3 12.5 3 15.5S5.5 21 8.5 21s5.5-2.5 5.5-5.5c0-.8-.2-1.6-.5-2.3-1.2 1-2.8 1.6-4.5 1.6-1.1 0-2.2-.3-3.1-.9.7.5 1.5.8 2.4.8 2.2 0 4-1.8 4-4 0-.5-.1-1-.3-1.5-1.1.3-2.3.5-3.5.5zm7 0c-3 0-5.5 2.5-5.5 5.5S10 21 13 21s5.5-2.5 5.5-5.5c0-.8-.2-1.6-.5-2.3-1.2 1-2.8 1.6-4.5 1.6-1.1 0-2.2-.3-3.1-.9.7.5 1.5.8 2.4.8 2.2 0 4-1.8 4-4 0-.5-.1-1-.3-1.5-1.1.3-2.3.5-3.5.5z"/></svg>` },
    { id: 'b4', name: 'Sweet Victory', description: 'New high score in Puzzle Rush.', unlocked: true, svgIcon: `<svg viewBox="0 0 64 64"><path fill="#22c55e" d="M32 2c-3.3 0-6.2 1.9-7.6 4.7-1.2.6-2.5.9-3.9.9-4.1 0-7.5-3.4-7.5-7.5C13 0 12.6 0 12.1 0 7.1 0 3 4.1 3 9.1c0 2.2 2.6 5.3 5.4 6.8C5.8 18.6 4 21.9 4 25.7c0 7.8 6.4 14.1 14.1 14.1.8 0 1.6-.1 2.4-.2 2.8 4.2 7.5 7.1 12.9 7.1s10-2.9 12.9-7.1c.8.2 1.6.2 2.4.2 7.8 0 14.1-6.4 14.1-14.1 0-3.8-1.8-7.1-4.4-9.8 2.8-1.5 5.4-4.5 5.4-6.8C61 4.1 56.9 0 51.9 0c-.5 0-.9 0-1.4.1-4.1 0-7.5 3.4-7.5 7.5 0 1.4.4 2.7 1.1 3.9-1.5-2.7-4.4-4.7-7.7-4.7z"/><path fill="#ef4444" d="M32 23.3c-7.8 0-14.1 6.4-14.1 14.1S24.2 51.6 32 51.6s14.1-6.4 14.1-14.1S39.8 23.3 32 23.3z"/><circle fill="#fecaca" cx="26" cy="34" r="2"/><circle fill="#fecaca" cx="38" cy="34" r="2"/><circle fill="#fecaca" cx="32" cy="42" r="2"/></svg>` },
    { id: 'b5', name: 'Weather Watcher', description: 'Played daily for a week.', unlocked: true, svgIcon: `<svg viewBox="0 0 64 64"><path fill="#FFFFFF" d="M49.4 19.3c-1-5.3-5.7-9.3-11.4-9.3-4.1 0-7.7 2.2-9.8 5.5-1.5-1-3.3-1.5-5.2-1.5C16.8 14 11 19.8 11 26c0 .8.1 1.6.3 2.4-5.3.5-9.3 5-9.3 10.6C2 44.5 7.5 50 14 50h35c6.6 0 12-5.4 12-12 .1-6.2-4.7-11.4-10.6-11.7z"/><path fill="#FFD6E7" d="M22.5 40.4c-1.4-1-1.6-3.1-.6-4.5s3.1-1.6 4.5-.6c1.4 1 1.6 3.1.6 4.5-1 1.4-3.1 1.6-4.5.6z"/><path fill="#FF5A92" d="M38.5 35c-1.4-1-1.6-3.1-.6-4.5s3.1-1.6 4.5-.6c1.4 1 1.6 3.1.6 4.5-1.1 1.4-3.1 1.6-4.5.6z"/><path fill="#C5306C" d="M30 46c-1.4-1-1.6-3.1-.6-4.5s3.1-1.6 4.5-.6c1.4 1 1.6 3.1.6 4.5-1 1.4-3 1.6-4.5.6z"/></svg>` },
    { id: 'b6', name: 'Night Owl', description: 'Played a game after 10 PM.', unlocked: false, svgIcon: `<svg viewBox="0 0 64 64"><path fill="#8B5CF6" d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30 30-13.4 30-30S48.6 2 32 2z"/><path fill="#FBF5FF" d="M47.7 18.2c-10.9 2.5-19.3 11-21.8 21.8-1.5-.7-2.9-1.7-4.1-2.9-5.9-5.9-5.9-15.4 0-21.2s15.4-5.9 21.2 0c1.2 1.2 2.2 2.6 2.9 4.1.1 0 .1-.1 0 0z"/><path fill="#FBBF24" d="M48 34c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path fill="#FFFFFF" d="M50 48l-2.2 1.3.4-2.5-1.8-1.8 2.5-.4L50 44l1.1 2.6 2.5.4-1.8 1.8.4 2.5zM22 22l-2.2 1.3.4-2.5-1.8-1.8 2.5-.4L22 18l1.1 2.6 2.5.4-1.8 1.8.4 2.5z"/></svg>` },
    { id: 'b7', name: 'Perfect Petal', description: 'Perfect score in Beat the Beat.', unlocked: false, svgIcon: `<svg viewBox="0 0 64 64"><path fill="#fbcfe8" d="M32 6.1c-2.3 0-4.5 1-6.2 2.8-5 5-5.1 13.1-.3 18.2L32 50.9l6.5-23.8c4.8-5.1 4.7-13.2-.3-18.2-1.7-1.7-3.9-2.7-6.2-2.8z"/><path fill="#e11d48" d="M32 20.3c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/><path fill="#f472b6" d="M54.2 22.3c-2.4-5.9-7.9-9.8-14.2-9.8-3.3 0-6.4 1.3-8.8 3.5-2.4-2.2-5.5-3.5-8.8-3.5-6.3 0-11.8 3.9-14.2 9.8C2.5 28.1 6.5 35.8 12.3 42L32 62l19.7-20c5.7-6.2 9.8-13.9 8.1-19.7h-5.6zM32 39.1c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/></svg>` },
    { id: 'b8', name: 'Fun Guy', description: 'Joined a themed event.', unlocked: false, svgIcon: `<svg viewBox="0 0 64 64"><path fill="#22c55e" d="M54 62H10c-1.1 0-2-.9-2-2V30c0-1.1.9-2 2-2h44c1.1 0 2 .9 2 2v30c0 1.1-.9 2-2 2z"/><path fill="#f472b6" d="M51 29.8C51 17.2 42.6 7 32 7S13 17.2 13 29.8c0 .1 0 .2.1.3h37.8c.1-.1.1-.2.1-.3z"/><circle fill="#fce7f3" cx="24" cy="18" r="4"/><circle fill="#fce7f3" cx="40" cy="18" r="4"/><circle fill="#fce7f3" cx="32" cy="25" r="3"/></svg>` },
    { id: 'b9', name: 'Green Thumb', description: 'Played Word Hunt 10 times.', unlocked: false, svgIcon: `<svg viewBox="0 0 64 64"><path fill="#15803d" d="M32 2C18.7 2 8 12.7 8 26c0 7.7 3.5 14.6 9 19.1V60c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V45.1c5.5-4.5 9-11.4 9-19.1C56 12.7 45.3 2 32 2z"/><path fill="#4ade80" d="M32 10c-8.8 0-16 7.2-16 16 0 6.6 4 12.2 9.5 14.8.5.2.9.7.9 1.2v9.3c0 .5-.4 1-.9 1.2C22.2 53.6 18 47.1 18 40c0-11 9-20 20-20s20 9 20 20c0 7.1-4.2 13.6-10.5 16.7-.5-.2-.9-.7-.9-1.2v-9.3c0-.5.4-1 .9-1.2C44 48.2 48 42.6 48 36c0-8.8-7.2-16-16-16z"/></svg>` },
    { id: 'b10', name: 'Seasoned Pro', description: 'Reached Gold Level.', unlocked: false, svgIcon: `<svg viewBox="0 0 64 64"><path fill="#f9a8d4" d="M51.1 19.3c-2.3-3.6-6-6-10.1-6-5.8 0-10.7 4.1-12.1 9.6-1.5-5.5-6.3-9.6-12.1-9.6-4.1 0-7.8 2.4-10.1 6-4.2 6.7-3.1 15.6 2.6 20.9L32 58l20.5-17.8c5.7-5.3 6.8-14.2 2.6-20.9z"/><path fill="#f472b6" d="M32 25.9c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/></svg>` },
];

const friendsData = [
    { name: 'Luna', online: true, streak: 15 },
    { name: 'Leo', online: true, streak: 12 },
    { name: 'Mia', online: false, streak: 8 },
    { name: 'Zane', online: false, streak: 5 },
    { name: 'Kai', online: true, streak: 1 },
];

const collectiblesData = [
    { id: 'Aria', name: 'Aria', unlocked: true },
    { id: 'Luna', name: 'Luna', unlocked: false },
    { id: 'Leo', name: 'Leo', unlocked: false },
    { id: 'Mia', name: 'Mia', unlocked: false },
    { id: 'Zane', name: 'Zane', unlocked: false },
    { id: 'Kai', name: 'Kai', unlocked: false },
    { id: 'Nia', name: 'Nia', unlocked: false },
];

const recentRewardsData = [
    { title: 'Happy Tappy Victory', gokens: '+5', time: '7 hours ago', icon: '🎁' },
    { title: '7-day Login Bonus', gokens: '+10', time: 'Yesterday', icon: '🗓️' },
    { title: 'Gift from Luna', gokens: '+8', time: '1 day ago', icon: '💖' },
    { title: 'Weekly Challenge Complete', gokens: '+25', time: '1 day ago', icon: '🏆' },
];

const userProgress = {
    currentRank: 'Gold',
    nextRank: 'Platinum',
    percentage: 75
};

const userItems = {
    items: 12,
    collectibles: 3,
};

const donationProjects = [
    { id: 'p1', title: 'Feed a Stray Friend', description: 'Help provide food for local animal shelters.', current: 750, goal: 1000, icon: '🐶' },
    { id: 'p2', title: 'Plant a Tree', description: 'Contribute to reforestation efforts around the globe.', current: 450, goal: 2000, icon: '🌳' },
    { id: 'p3', title: 'Support a Scholar', description: 'Fund educational materials for a student in need.', current: 1800, goal: 2500, icon: '📚' },
];

const donationHistory = [
    { project: 'Feed a Stray Friend', gokens: 50, date: '2 days ago' },
    { project: 'Plant a Tree', gokens: 25, date: '1 week ago' },
];

const communityEffort = {
    current: 12500,
    goal: 20000,
};

const arHuntTypes = [
    {
        title: 'Normal Hunts',
        description: 'Gokens, rare avatar items, and real-world vouchers appear in everyday spots.',
        icon: '🗺️'
    },
    {
        title: 'Themed Hunts',
        description: 'Find limited edition items in theme-specific locations during special events. (e.g. Globe’s “Blue Week”)!',
        icon: '🎉'
    },
    {
        title: 'Brand Partnership Hunts',
        description: 'Scan QR codes from partner products and stores to redeem exclusive rewards. (e.g. Krispy Kreme)',
        icon: '🛍️'
    },
    {
        title: 'Campus Tour Hunts',
        description: 'Explore your campus and find hidden QR codes to redeem Gokens during Globe visits.',
        icon: '🎓'
    }
];

// --- STATE MANAGEMENT ---

type AppState = {
    currentPage: 'rewards' | 'gokenZone';
    gokenPage: 'home' | 'games' | 'friends' | 'profile' | 'customize-avatar' | 'share-summary' | 'full-badges' | 'cause-details';
    gokenGamesTab: 'all-games' | 'coming-soon';
    gokenFriendsTab: 'friends-content' | 'rankings-content';
    gokenRankingsTab: 'weekly-ranking' | 'all-time-ranking';
    gokenCauseTab: 'donate' | 'history' | 'effort';
    gokenCustomizeTab: 'accessories' | 'collectibles';
    userAvatarBase: string;
    userAvatarAccessories: string[];
};

let state: AppState = {
    currentPage: 'rewards',
    gokenPage: 'home',
    gokenGamesTab: 'all-games',
    gokenFriendsTab: 'friends-content',
    gokenRankingsTab: 'weekly-ranking',
    gokenCauseTab: 'donate',
    gokenCustomizeTab: 'accessories',
    userAvatarBase: 'Aria',
    userAvatarAccessories: [],
};

function setState(newState: Partial<AppState>) {
    Object.assign(state, newState);
    renderApp();
}

// --- UI COMPONENTS (as functions returning markup strings) ---

function RewardsPage() { return `
<div class="page-container" id="rewards-page">
    <div class="rewards-page-content">
        <header class="header">REDEEM REWARDS</header>
        <div class="user-info">
            <div class="user-info-text">
                <span>You're redeeming for</span>
                <span>Alexa 0995 557 7173</span>
            </div>
            <button class="change-btn">Change</button>
        </div>
        <div class="search-bar">
            <div class="search-input-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" class="search-input" placeholder="What are you looking for?">
            </div>
            <button class="filter-btn" aria-label="Filter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
            </button>
        </div>
        <div class="tabs">
            <button class="tab-btn active">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                My Rewards History
            </button>
            <button class="tab-btn">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                FAQs
            </button>
        </div>
        <section class="goken-banner" data-action="navigate" data-page-group="root" data-page="gokenZone" role="button" tabindex="0" aria-label="Enter Goken Zone">
            <div class="stars">
                <div class="star-particle" style="top: 15%; left: 80%; width: 2px; height: 2px; animation-duration: 10s; animation-delay: 0s;"></div>
                <div class="star-particle" style="top: 80%; left: 10%; width: 3px; height: 3px; animation-duration: 8s; animation-delay: 1s;"></div>
                <div class="star-particle" style="top: 50%; left: 95%; width: 1px; height: 1px; animation-duration: 12s; animation-delay: 2s;"></div>
                <div class="star-particle" style="top: 30%; left: 40%; width: 2px; height: 2px; animation-duration: 9s; animation-delay: 3s;"></div>
                <div class="star-particle" style="top: 5%; left: 5%; width: 1px; height: 1px; animation-duration: 15s; animation-delay: 0.5s;"></div>
                <div class="star-particle" style="top: 60%; left: 60%; width: 2px; height: 2px; animation-duration: 7s; animation-delay: 1.5s;"></div>
                <div class="star-particle" style="top: 90%; left: 85%; width: 1px; height: 1px; animation-duration: 13s; animation-delay: 2.5s;"></div>
                <div class="star-particle" style="top: 25%; left: 15%; width: 2px; height: 2px; animation-duration: 11s; animation-delay: 4s;"></div>
                <div class="star-particle" style="top: 75%; left: 45%; width: 1px; height: 1px; animation-duration: 14s; animation-delay: 1s;"></div>
                <div class="star-particle" style="top: 40%; left: 5%; width: 2px; height: 2px; animation-duration: 10s; animation-delay: 3.5s;"></div>
                <div class="star-particle" style="top: 10%; left: 65%; width: 1px; height: 1px; animation-duration: 9s; animation-delay: 0s;"></div>
            </div>
              <div class="goken-icon-wrapper">
                   <svg class="gamepad-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                    <path d="M6 12h4m4 0h4m-6-3v6"></path>
                </svg>
              </div>
            <div class="goken-text">
                <h2>GOKEN ZONE</h2>
                <p class="goken-subtext">Play • Collect • Win</p>
            </div>
            <div class="goken-points">
                <div class="goken-points-value">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                    89
                </div>
                <span class="goken-points-label">Gokens</span>
            </div>
        </section>
        <div class="points-summary-unified">
            <div class="point-section"><div class="point-card-title">Rewards Points</div><div class="point-card-value"><span class="blue-dot">•</span>No points yet</div><p class="point-card-info">Buy promos, top up load, or pay bill to earn points!</p></div>
            <div class="divider"></div>
            <div class="point-section"><div class="point-card-title">Gokens <span class="new-tag">New</span></div><div class="point-card-value"><span class="pink-dot">•</span>14 gokens</div><p class="point-card-info">14 gokens expire on Feb 09, 2026</p></div>
        </div>
        <div class="quick-actions">
            <button class="action-btn"><div class="action-icon-bg">${QuickActionIcons.Pay}</div><span>Pay With Points</span></button>
            <button class="action-btn"><div class="action-icon-bg">${QuickActionIcons.Voucher}</div><span>My Vouchers</span></button>
            <button class="action-btn"><div class="action-icon-bg">${QuickActionIcons.Shop}</div><span>Goken Shop</span></button>
        </div>
        <section class="content-section">
            <div class="section-header">
                <h2>Just For You!</h2>
                <a href="#">View more</a>
            </div>
            <div class="horizontal-scroll">
                <div class="promo-card">
                    <img class="promo-card-img" src="https://telecomlead.com/wp-content/uploads/2014/05/Globe-Telecom-campaign.png" alt="Promo image of a person on their phone">
                    <div class="promo-card-body">
                        <p>Unlimited Calls to ALL NETWORKS for 1 day...</p>
                        <span>2 pts</span>
                    </div>
                </div>
                <div class="promo-card">
                    <img class="promo-card-img" src="https://pbs.twimg.com/media/F9cS39uacAAlbkg?format=jpg&name=large" alt="Promo image of a person smiling while using a laptop">
                    <div class="promo-card-body">
                        <p>1GB surfing for 1 day (SURF1GB)</p>
                        <span>10 pts</span>
                    </div>
                </div>
                 <div class="promo-card">
                    <img class="promo-card-img" src="https://images.gmanews.tv/webpics/2022/09/GDay-MainKV-1920x1080_2022_09_16_09_38_15.jpg" alt="Promo image of a person happily using their phone">
                    <div class="promo-card-body">
                        <p>MB of Data Valid for 1 day (SURF100MB)</p>
                        <span>5 pts</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="content-section">
            <div class="section-header">
                <h2>What's Hot</h2>
                <a href="#">View more</a>
            </div>
            <div class="horizontal-scroll">
                <div class="hot-promo-card" style="background-image: url('https://pbs.twimg.com/media/Gmnbpela0AA7L4w?format=jpg&name=large')">
                    <h3>UNLOCK: FREE Rewards points</h3>
                </div>
                 <div class="hot-promo-card" style="background-image: url('https://webmanager.raksotravel.com/Images/upload/event_manager/10058_banner.jpg')">
                    <h3>1% OFF flights at Trip.com</h3>
                </div>
                 <div class="hot-promo-card" style="background-image: url('https://images.gmanews.tv/webpics/2022/09/GDay-MainKV-1920x1080_2022_09_16_09_38_15.jpg')">
                    <h3>G Unli Freebie</h3>
                </div>
            </div>
        </section>
    </div>
    <nav class="bottom-nav">
        <a href="#" class="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span>Home</span>
        </a>
        <a href="#" class="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span>Shop</span>
        </a>
        <a href="#" class="nav-item essentials">
            <div class="nav-item-icon-wrapper nav-icon-essentials">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007BFF"/><circle cx="12" cy="12" r="6" fill="#FFFFFF"/><circle cx="12" cy="12" r="2.5" fill="#007BFF"/><path d="M12 2 a 10 10 0 0 0 0 20 a 10 10 0 0 1 0-15" fill="#FFFFFF" transform-origin="center" /><circle cx="15.5" cy="8.5" r="1.5" fill="#f44336"/></svg>
            </div>
            <span class="essentials-label">Essentials</span>
        </a>
        <a href="#" class="nav-item active">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM12 12V8m0 8v4m4-4h4m-16 0H4"></path><path d="M20 7V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v1"></path></svg>
            <span>Rewards</span>
        </a>
        <a href="#" class="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span>Profile</span>
        </a>
    </nav>
</div>
`;}

function gokenHomePageContent() {
    const friendCount = friendsData.length;
    return `
<div class="goken-home-layout">
    <div class="goken-main-banner" style="background-image: url('https://media.discordapp.net/attachments/1077977791594762375/1405076547576135771/Goken_Zone_1.png?ex=689d8302&is=689c3182&hm=5ece90f763c0db0c685ddf84a15320acfb1d39711f1930eb158b2576ff96af94&=&format=webp&quality=lossless&width=1440&height=810');">
        <div class="goken-main-banner-overlay">
            <a href="#" class="goken-play-btn" data-action="navigate" data-page-group="goken" data-page="games">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                START PLAYING
                <span>&rightarrow;</span>
            </a>
        </div>
    </div>

    <div class="goken-stats">
        <div class="stat-item"><div class="stat-icon">${StatIcons.Games}</div><div><strong>23</strong><br>Games</div></div>
        <div class="stat-item"><div class="stat-icon">${StatIcons.Badges}</div><div><strong>12</strong><br>Badges</div></div>
        <div class="stat-item"><div class="stat-icon">${StatIcons.Friends}</div><div><strong>${friendCount}</strong><br>Friends</div></div>
        <div class="stat-item"><div class="stat-icon">${StatIcons.Level}</div><div><strong>Gold</strong><br>Level</div></div>
    </div>

    <div class="goken-card avatar-card">
        <header>
            <div>
                <h3>Your Avatar</h3>
                <p>Customize your cute character</p>
            </div>
            <button class="style-btn" data-action="navigate" data-page-group="goken" data-page="customize-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 10.5L16.42 20.34a1 1 0 01-1.84 0L11.5 10.5H2v-2h8.5a1 1 0 01.92.62L13 11.28l1.58-2.16a1 1 0 01.92-.62H22v2h-2.5zM4.5 4.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm15 0a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
                Style
            </button>
        </header>
        <div class="avatar-body">
            <div class="avatar-img-placeholder" data-action="navigate" data-page-group="goken" data-page="customize-avatar">
                 <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="avatar-svg">
                    ${avatarSVGs[state.userAvatarBase]}
                    ${state.userAvatarAccessories.map(id => {
                        const acc = avatarAccessories.find(a => a.id === id);
                        return acc ? acc.svg : '';
                    }).join('')}
                </svg>
            </div>
            <div class="avatar-info">
                <h4>Aria</h4>
                <p class="avatar-subinfo">Gold Level • 89</p>
                <p class="avatar-stats">6 items • 1 collectible</p>
                <div class="avatar-rating">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
            </div>
        </div>
    </div>
    
    <section class="goken-section">
        <header class="goken-section-header">
            <h3>Explore Games</h3>
        </header>
        <div class="games-carousel">
            ${allGames.map(game => `
                 <div class="game-card" data-action="navigate" data-page-group="goken" data-page="games">
                    <img src="${game.imageUrl}" alt="${game.name}"/>
                    <div class="game-card-info">
                        <h4>${game.name}</h4>
                        <p>${game.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    </section>

    <div class="goken-card share-journey-card-section blue-theme" data-action="navigate" data-page-group="goken" data-page="share-summary">
      <div class="share-journey-icon">${ShareIcon()}</div>
      <div class="share-journey-content">
          <h4>Share Your Journey!</h4>
          <p>Show off your rank and streaks to your friends.</p>
      </div>
      <div class="share-journey-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </div>
    </div>

    <div class="goken-card cause-card" data-action="navigate" data-page-group="goken" data-page="cause-details">
        ${AnimatedHeartIcon()}
        <div class="cause-text">
            <h3>Goken For A Cause</h3>
            <p>Turn your Gokens into good deeds!</p>
        </div>
    </div>
</div>
`;
}

function gokenGamesPageMarkup() { return `
    <div class="games-page-container">
        <div class="games-tabs">
            <button class="games-tab-btn ${state.gokenGamesTab === 'all-games' ? 'active' : ''}" data-action="switch-tab" data-tab-group="gokenGames" data-tab="all-games">All Games</button>
            <button class="games-tab-btn ${state.gokenGamesTab === 'coming-soon' ? 'active' : ''}" data-action="switch-tab" data-tab-group="gokenGames" data-tab="coming-soon">Coming Soon</button>
        </div>
        <div class="games-tab-content ${state.gokenGamesTab === 'all-games' ? 'active' : ''}" id="all-games-content">
            ${allGames.map(game => `
                 <div class="landscape-game-card">
                    <img src="${game.imageUrl}" alt="${game.name}">
                    <div class="landscape-game-info">
                        <h4>${game.name}</h4>
                        <p>${game.description}</p>
                         ${game.timer ? `
                            <div class="game-timer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <span>Ends in: ${game.timer}</span>
                            </div>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="games-tab-content ${state.gokenGamesTab === 'coming-soon' ? 'active' : ''}" id="coming-soon-content">
            <div class="ar-hunts-sneak-peek">
                <div class="candy-particle" style="--d:15s; --x:10%; --y:80%; --s:30px; --c: #ff9a9e;"></div>
                <div class="candy-particle" style="--d:10s; --x:85%; --y:20%; --s:50px; --c: #a6c1ee;"></div>
                <div class="candy-particle" style="--d:12s; --x:90%; --y:90%; --s:25px; --c: #fad0c4;"></div>
                <div class="candy-particle" style="--d:18s; --x:15%; --y:10%; --s:40px; --c: #96e6a1;"></div>

                <h3 class="neon-text" data-text="AR Hunts Coming Soon!">AR Hunts Coming Soon!</h3>
                <p class="candy-text">A new reality of rewards awaits!</p>

                <div class="ar-sneak-peek-visual">
                    <div class="ar-phone">
                        <div class="ar-phone-screen">
                            <div class="ar-goken-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FBBF24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                            </div>
                            <div class="ar-scan-line"></div>
                        </div>
                    </div>
                     <div class="ar-bg-building" style="--h: 60px; --w: 40px; --l: 10%; --d: 12s;"></div>
                     <div class="ar-bg-building" style="--h: 80px; --w: 50px; --l: 45%; --d: 8s; background-color: #a78bfa;"></div>
                     <div class="ar-bg-building" style="--h: 50px; --w: 30px; --l: 80%; --d: 15s; background-color: #f472b6;"></div>
                </div>
                
                 <div class="ar-hunt-widgets-container">
                    ${arHuntTypes.map(hunt => `
                        <div class="ar-hunt-widget">
                            <div class="ar-hunt-widget-icon">${hunt.icon}</div>
                            <div class="ar-hunt-widget-text">
                                <h4>${hunt.title}</h4>
                                <p>${hunt.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
`;}

function gokenFullBadgesPageMarkup() {
    const unlockedBadgeCount = badgesData.filter(b => b.unlocked).length;
    const totalBadgeCount = badgesData.length;
    return `
    <div id="badges-content" class="goken-subpage">
         <button class="subpage-back-btn" data-action="navigate" data-page-group="goken" data-page="profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Back to Profile
        </button>
        <div class="badge-header">
            <h3>My Badge Collection</h3>
            <p>You've unlocked ${unlockedBadgeCount} of ${totalBadgeCount} badges. Keep it up!</p>
        </div>
        <div class="badge-grid">
            ${badgesData.map(badge => `
                <div class="badge-item ${badge.unlocked ? '' : 'locked'}">
                    <div class="badge-hexagon-container">
                        <div class="badge-hexagon">
                            ${badge.svgIcon}
                        </div>
                        ${!badge.unlocked ? `<div class="lock-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </div>` : ''}
                    </div>
                    <div class="badge-info">
                        <h4>${badge.name}</h4>
                        <p>${badge.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>`;
}

function gokenFriendsPageMarkup() {
    const user = { name: 'Aria', gokens: 89, streak: 3 };

    const allPeople = [...friendsData, user];
    const topStreaker = allPeople.reduce((prev, current) => (prev.streak > current.streak) ? prev : current);
    
    // --- Leaderboard Data Setup ---
    const allPlayersForRanking = ['Aria', 'Luna', 'Leo', 'Mia', 'Zane', 'Kai', 'Nia'];
    const avatarBgColors = {
        Aria: '#e0f2fe', Luna: '#FBCFE8', Leo: '#A7F3D0', Mia: '#F3E8FF',
        Zane: '#d1fae5', Kai: '#fef3c7', Nia: '#ffe4e6'
    };

    // Weekly Leaderboard
    const weeklyLeaderboardData = [
        { name: 'Luna', gokens: 324 }, { name: 'Leo', gokens: 315 }, { name: 'Mia', gokens: 298 },
        { name: 'Zane', gokens: 275 }, { name: 'Kai', gokens: 262 }, { name: 'Nia', gokens: 251 },
        { name: 'Aria', gokens: 89, isUser: true },
    ].sort((a,b) => b.gokens - a.gokens).map((p, i) => ({...p, rank: i+1}));

    const weeklyTop3 = weeklyLeaderboardData.slice(0, 3);
    const weeklyRest = weeklyLeaderboardData.slice(3);
    const podiumOrderWeekly = [ weeklyTop3.find(p => p.rank === 2), weeklyTop3.find(p => p.rank === 1), weeklyTop3.find(p => p.rank === 3) ].filter(Boolean);

    // All-Time Leaderboard (randomized)
    const getRandomScore = () => Math.floor(Math.random() * (350 - 12 + 1)) + 12;
    const allTimeLeaderboardData = allPlayersForRanking.map(name => ({
        name: name, gokens: getRandomScore(), isUser: name === 'Aria',
    })).sort((a, b) => b.gokens - a.gokens).map((player, index) => ({ ...player, rank: index + 1 }));

    const allTimeTop3 = allTimeLeaderboardData.slice(0, 3);
    const allTimeRest = allTimeLeaderboardData.slice(3);
    const podiumOrderAllTime = [ allTimeTop3.find(p => p.rank === 2), allTimeTop3.find(p => p.rank === 1), allTimeTop3.find(p => p.rank === 3)].filter(Boolean);


    return `
    <div class="friends-page-container">
        <div class="games-tabs">
            <button class="games-tab-btn ${state.gokenFriendsTab === 'friends-content' ? 'active' : ''}" data-action="switch-tab" data-tab-group="gokenFriends" data-tab="friends-content">Friends</button>
            <button class="games-tab-btn ${state.gokenFriendsTab === 'rankings-content' ? 'active' : ''}" data-action="switch-tab" data-tab-group="gokenFriends" data-tab="rankings-content">Rankings</button>
        </div>

        <div class="games-tab-content ${state.gokenFriendsTab === 'friends-content' ? 'active' : ''}" id="friends-content">
            <div class="greatest-streak-card">
                <div class="streak-card-content">
                    <div class="friend-avatar-container">${avatarSVGs[topStreaker.name]}</div>
                    <div>
                        <span class="streak-card-title">👑 Streak King</span>
                        <span class="streak-card-text">
                            <strong>${topStreaker.name}</strong> is on a ${topStreaker.streak}-day streak!
                        </span>
                    </div>
                </div>
            </div>

            <div class="daily-gifts-card">
                <h4>Your Daily Gifts</h4>
                <p>You are on a <strong>${user.streak}-day</strong> gift streak!</p>
                <div class="gift-streak-progress">
                    ${[...Array(7)].map((_, i) => `<div class="streak-dot ${i < user.streak ? 'active' : ''}"></div>`).join('')}
                </div>
            </div>
            <div class="friend-list-header">
                <h4>All Friends (${friendsData.length})</h4>
                <button class="add-friend-btn">+ Add Friend</button>
            </div>
            <div class="friend-list">
                ${friendsData.map((friend, index) => `
                    <div class="friend-item friend-item-style-${index % 3} ${friend.name === 'Luna' ? 'is-luna' : ''}">
                        <div class="friend-info">
                            <div class="friend-avatar-container">${avatarSVGs[friend.name]}</div>
                            <div class="friend-details">
                                <span class="friend-name">${friend.name}</span>
                                <div class="friend-status ${friend.online ? 'online' : ''}">
                                    <div class="online-dot"></div>
                                    <span>${friend.online ? 'Online' : 'Offline'}</span>
                                </div>
                            </div>
                        </div>
                         <div class="friend-actions">
                            <div class="friend-streak">🔥 ${friend.streak}</div>
                            <button class="friend-gift-btn" aria-label="Send gift to ${friend.name}">${GiftIcon()}</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="games-tab-content ${state.gokenFriendsTab === 'rankings-content' ? 'active' : ''}" id="rankings-content">
             <div class="rankings-sub-tabs">
                <button class="rankings-sub-tab-btn ${state.gokenRankingsTab === 'weekly-ranking' ? 'active' : ''}" data-action="switch-tab" data-tab-group="gokenRankings" data-tab="weekly-ranking">Weekly</button>
                <button class="rankings-sub-tab-btn ${state.gokenRankingsTab === 'all-time-ranking' ? 'active' : ''}" data-action="switch-tab" data-tab-group="gokenRankings" data-tab="all-time-ranking">All time</button>
            </div>
            <div class="leaderboard-content ${state.gokenRankingsTab === 'weekly-ranking' ? 'active' : ''}" id="weekly-ranking">
                 <div class="leaderboard-podium-cute">
                    ${podiumOrderWeekly.map(item => `
                        <div class="podium-item podium-${item.rank}">
                            <div class="podium-avatar" style="--bg-color: ${avatarBgColors[item.name] || '#e5e7eb'};">${avatarSVGs[item.name]}</div>
                            <div class="podium-info">
                                <span class="podium-name">${item.name}</span>
                                <span class="podium-score">${item.gokens} Gokens</span>
                            </div>
                            <div class="podium-stand">${item.rank}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="leaderboard-list">
                   ${weeklyRest.map(item => `
                        <div class="leaderboard-item ${item.isUser ? 'is-user' : ''}">
                            <div class="friend-info">
                                <span class="friend-rank">${item.rank}</span>
                                <div class="friend-avatar-container">${avatarSVGs[item.name]}</div>
                                <div>
                                    <span class="friend-name">${item.name} ${item.isUser ? '(You)' : ''}</span>
                                </div>
                            </div>
                            <span class="leaderboard-gokens">${item.gokens.toLocaleString()}</span>
                        </div>
                   `).join('')}
                </div>
            </div>
            <div class="leaderboard-content ${state.gokenRankingsTab === 'all-time-ranking' ? 'active' : ''}" id="all-time-ranking">
                <div class="leaderboard-podium-cute">
                    ${podiumOrderAllTime.map(item => `
                        <div class="podium-item podium-${item.rank}">
                            <div class="podium-avatar" style="--bg-color: ${avatarBgColors[item.name] || '#e5e7eb'};">${avatarSVGs[item.name]}</div>
                            <div class="podium-info">
                                <span class="podium-name">${item.name}</span>
                                <span class="podium-score">${item.gokens} Gokens</span>
                            </div>
                            <div class="podium-stand">${item.rank}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="leaderboard-list">
                   ${allTimeRest.map(item => `
                        <div class="leaderboard-item ${item.isUser ? 'is-user' : ''}">
                            <div class="friend-info">
                                <span class="friend-rank">${item.rank}</span>
                                <div class="friend-avatar-container">${avatarSVGs[item.name]}</div>
                                <div>
                                    <span class="friend-name">${item.name} ${item.isUser ? '(You)' : ''}</span>
                                </div>
                            </div>
                            <span class="leaderboard-gokens">${item.gokens.toLocaleString()}</span>
                        </div>
                   `).join('')}
                </div>
            </div>
        </div>
    </div>
    `;
};

function gokenProfilePageMarkup() {
    const unlockedBadgeCount = badgesData.filter(b => b.unlocked).length;
    const totalBadgeCount = badgesData.length;
    const friendCount = friendsData.length;

    return `
    <div class="profile-page-container">
        <!-- Profile Header -->
        <div class="profile-header-card">
            <div class="profile-user-info">
                <div class="profile-avatar-container" data-action="navigate" data-page-group="goken" data-page="customize-avatar">
                     <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="avatar-svg">
                        ${avatarSVGs[state.userAvatarBase]}
                        ${state.userAvatarAccessories.map(id => {
                            const acc = avatarAccessories.find(a => a.id === id);
                            return acc ? acc.svg : '';
                        }).join('')}
                    </svg>
                </div>
                <div class="profile-details">
                    <h3 class="profile-name">Aria</h3>
                    <p class="profile-stats">${userProgress.currentRank} Level • ${friendCount} Friends</p>
                </div>
            </div>
            <button class="customize-avatar-btn" data-action="navigate" data-page-group="goken" data-page="customize-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                <span>Customize</span>
            </button>
        </div>

        <!-- Level Progress Bar -->
        <div class="level-progress-container">
            <div class="level-progress-header">
                <span class="level-title">Level Progress</span>
                <span class="level-ranks">${userProgress.currentRank} &rarr; ${userProgress.nextRank}</span>
            </div>
            <div class="level-progress-bar">
                <div class="level-progress-fill" style="width: ${userProgress.percentage}%;"></div>
            </div>
            <span class="level-percentage">${userProgress.percentage}% to ${userProgress.nextRank}</span>
        </div>

        <!-- Badges Section -->
        <section class="profile-section">
            <div class="section-header">
                <h2>Badges ${unlockedBadgeCount}/${totalBadgeCount}</h2>
                <a href="#" class="view-all-link" data-action="navigate" data-page-group="goken" data-page="full-badges">View all ></a>
            </div>
            <div class="profile-badges-carousel">
                ${badgesData.filter(b => b.unlocked).slice(0, 5).map(badge => `
                    <div class="badge-preview-item">
                        <div class="badge-hexagon-container preview">
                            <div class="badge-hexagon">
                                ${badge.svgIcon}
                            </div>
                        </div>
                        <span>${badge.name}</span>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- Progress/Current Status Section -->
        <section class="profile-section">
             <div class="section-header">
                <h2>Progress</h2>
            </div>
            <div class="profile-progress-grid">
                <div class="progress-stat-card"><div class="progress-icon-wrapper">${StatIcons.Streak}</div><div><h4>15 Days</h4><p>Highest Streak</p></div></div>
                <div class="progress-stat-card"><div class="progress-icon-wrapper">${StatIcons.Rank}</div><div><h4>#4</h4><p>Current Rank</p></div></div>
                <div class="progress-stat-card"><div class="progress-icon-wrapper">${StatIcons.Played}</div><div><h4>23</h4><p>Games Played</p></div></div>
            </div>
             <div class="goken-card share-journey-card-section blue-theme" data-action="navigate" data-page-group="goken" data-page="share-summary" style="margin-top: 16px;">
                <div class="share-journey-icon">${ShareIcon()}</div>
                <div class="share-journey-content"><h4>Share Your Journey!</h4><p>Show off your rank and streaks to your friends.</p></div>
                <div class="share-journey-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
            </div>
        </section>

        <!-- Recent Rewards and Gokens Expiry Section -->
        <section class="profile-section">
            <div class="section-header">
                <h2>Recent Rewards</h2>
            </div>
            <div class="recent-rewards-list">
                ${recentRewardsData.map(reward => `
                    <div class="reward-item">
                        <div class="reward-icon">${reward.icon}</div>
                        <div class="reward-details">
                            <span class="reward-title">${reward.title}</span>
                            <span class="reward-time">${reward.time}</span>
                        </div>
                        <span class="reward-gokens">${reward.gokens}</span>
                    </div>
                `).join('')}
                <div class="goken-expiry-notice">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    <span>14 Gokens expire on Feb 09, 2026</span>
                </div>
            </div>
        </section>

        <!-- Goken for a Cause Section -->
        <div class="goken-card cause-card" data-action="navigate" data-page-group="goken" data-page="cause-details">
            ${AnimatedHeartIcon()}
            <div class="cause-text">
                <h3>Goken For A Cause</h3>
                <p>Turn your Gokens into good deeds!</p>
            </div>
        </div>
    </div>
    `;
};

function gokenSharePageMarkup() {
    const topBadges = badgesData.filter(b => b.unlocked).slice(-3); // Get last 3 unlocked as "rare"
    return `
        <div class="share-summary-page goken-subpage">
            <button class="subpage-back-btn" data-action="navigate" data-page-group="goken" data-page="profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                Back to Profile
            </button>
            <div class="trophy-container">
                <svg class="trophy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L9 5h6l-3-3z"/><path d="M12 5v4"/><path d="M6 9H4a2 2 0 00-2 2v2a6 6 0 006 6h8a6 6 0 006-6v-2a2 2 0 00-2-2h-2"/><path d="M6 15h12"/></svg>
                <div class="sparkle s1"></div>
                <div class="sparkle s2"></div>
                <div class="sparkle s3"></div>
                <div class="sparkle s4"></div>
            </div>
            <h2 class="victory-title">My Goken Journey!</h2>
            <p class="victory-subtitle">Here's a look at my achievements!</p>
            
            <div class="achievements-grid">
                <div class="achievement-item">
                    <div class="achievement-value">15 <span class="achievement-unit">Days</span></div>
                    <div class="achievement-label">Highest Streak</div>
                </div>
                <div class="achievement-item">
                    <div class="achievement-value">#4</div>
                    <div class="achievement-label">Current Rank</div>
                </div>
                <div class="achievement-item">
                    <div class="achievement-value">23</div>
                    <div class="achievement-label">Games Played</div>
                </div>
                 <div class="achievement-item">
                    <div class="achievement-value">${userItems.items + userItems.collectibles}</div>
                    <div class="achievement-label">Items Collected</div>
                </div>
            </div>

            <h3 class="rare-badges-title">My Rarest Badges</h3>
            <div class="rare-badges-list">
            ${topBadges.map(badge => `
                <div class="badge-preview-item">
                    <div class="badge-hexagon-container preview">
                        <div class="badge-hexagon">
                            ${badge.svgIcon}
                        </div>
                    </div>
                    <span>${badge.name}</span>
                </div>
            `).join('')}
            </div>
            
            <button class="share-now-btn">Share Now</button>
        </div>
    `;
};

function gokenCausePageMarkup() {
    const communityProgress = (communityEffort.current / communityEffort.goal) * 100;
    return `
        <div class="cause-details-page goken-subpage">
            <button class="subpage-back-btn" data-action="navigate" data-page-group="goken" data-page="profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                Back to Profile
            </button>
            <h2 class="cause-main-title">Goken for a Cause</h2>
            <p class="cause-main-subtitle">Use your Gokens to make a real-world impact. Every Goken counts!</p>

            <div class="cause-tabs-container">
                <div class="cause-tabs">
                    <button class="cause-tab-btn ${state.gokenCauseTab === 'donate' ? 'active' : ''}" data-action="switch-tab" data-tab-group="gokenCause" data-tab="donate">Donate</button>
                    <button class="cause-tab-btn ${state.gokenCauseTab === 'history' ? 'active' : ''}" data-action="switch-tab" data-tab-group="gokenCause" data-tab="history">History</button>
                    <button class="cause-tab-btn ${state.gokenCauseTab === 'effort' ? 'active' : ''}" data-action="switch-tab" data-tab-group="gokenCause" data-tab="effort">Collective Effort</button>
                </div>

                <div class="cause-tab-content ${state.gokenCauseTab === 'donate' ? 'active' : ''}" id="cause-tab-donate">
                    ${donationProjects.map(project => {
                        const projectProgress = (project.current / project.goal) * 100;
                        return `
                        <div class="project-card">
                            <div class="project-card-icon">${project.icon}</div>
                            <div class="project-card-details">
                                <h3>${project.title}</h3>
                                <p>${project.description}</p>
                                <div class="project-progress-bar">
                                    <div class="project-progress-fill" style="width: ${projectProgress}%;"></div>
                                </div>
                                <div class="project-progress-text">
                                    <span>${project.current.toLocaleString()} / ${project.goal.toLocaleString()} Gokens</span>
                                    <span>${projectProgress.toFixed(0)}%</span>
                                </div>
                            </div>
                            <button class="donate-btn">Donate</button>
                        </div>
                        `
                    }).join('')}
                </div>

                <div class="cause-tab-content ${state.gokenCauseTab === 'history' ? 'active' : ''}" id="cause-tab-history">
                    <div class="history-list">
                        ${donationHistory.length > 0 ? donationHistory.map(item => `
                            <div class="history-item">
                                <div class="history-item-details">
                                    <h4>Donated to ${item.project}</h4>
                                    <span>${item.date}</span>
                                </div>
                                <div class="history-item-amount">${item.gokens} Gokens</div>
                            </div>
                        `).join('') : '<p class="empty-history">You haven\'t made any donations yet.</p>'}
                    </div>
                </div>

                <div class="cause-tab-content ${state.gokenCauseTab === 'effort' ? 'active' : ''}" id="cause-tab-effort">
                    <div class="collective-effort-container">
                        <h3>Community Power!</h3>
                        <p>Together, we're making a huge difference. Look how much we've achieved!</p>
                        <div class="collective-heart-wrapper">
                             <svg class="collective-heart-svg" viewBox="0 0 100 95">
                                <defs>
                                    <linearGradient id="heartFill" x1="0" y1="1" x2="0" y2="0">
                                        <stop offset="0%" stop-color="#f43f5e" />
                                        <stop offset="${communityProgress}%" stop-color="#f43f5e" />
                                        <stop offset="${communityProgress}%" stop-color="#e5e7eb" />
                                        <stop offset="100%" stop-color="#e5e7eb" />
                                    </linearGradient>
                                </defs>
                                <path d="M92.71,7.27a24.16,24.16,0,0,0-34.16,0l-8.55,8.55L41.45,7.27a24.16,24.16,0,0,0-34.16,0,24.16,24.16,0,0,0,0,34.16l8.55,8.55,25.61,25.6a8,8,0,0,0,11.32,0L92.71,50a24.16,24.16,0,0,0,0-34.16Z" fill="url(#heartFill)" />
                            </svg>
                            <div class="collective-heart-text">${communityProgress.toFixed(0)}%</div>
                        </div>
                        <div class="collective-total-text">
                            <strong>${communityEffort.current.toLocaleString()}</strong> Gokens donated by the community!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

function gokenCustomizeAvatarPageMarkup() { 
    const isAccessoriesTab = state.gokenCustomizeTab === 'accessories';
    const isCollectiblesTab = state.gokenCustomizeTab === 'collectibles';

    return `
    <div class="customize-avatar-page goken-subpage">
        <div class="customize-header">
             <button class="subpage-back-btn" data-action="navigate" data-page-group="goken" data-page="profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                Back to Profile
            </button>
            <h2>Customize Avatar</h2>
        </div>

        <div class="avatar-preview-container">
            <div class="avatar-preview">
                 <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="avatar-svg-preview">
                    ${avatarSVGs[state.userAvatarBase]}
                    ${state.userAvatarAccessories.map(id => {
                        const acc = avatarAccessories.find(a => a.id === id);
                        return acc ? acc.svg : '';
                    }).join('')}
                </svg>
            </div>
        </div>
        
        <div class="games-tabs">
            <button class="games-tab-btn ${isAccessoriesTab ? 'active' : ''}" data-action="switch-tab" data-tab-group="gokenCustomize" data-tab="accessories">Accessories</button>
            <button class="games-tab-btn ${isCollectiblesTab ? 'active' : ''}" data-action="switch-tab" data-tab-group="gokenCustomize" data-tab="collectibles">Collectibles</button>
        </div>

        <div class="games-tab-content ${isAccessoriesTab ? 'active' : ''}">
            <div class="accessories-grid">
                ${avatarAccessories.map(acc => `
                    <button class="accessory-item ${state.userAvatarAccessories.includes(acc.id) ? 'selected' : ''}"
                            data-action="toggle-accessory"
                            data-accessory-id="${acc.id}">
                        <div class="accessory-icon">
                            <svg viewBox="0 0 26 42" fill="none" xmlns="http://www.w3.org/2000/svg">${acc.svg}</svg>
                        </div>
                        <span>${acc.name}</span>
                    </button>
                `).join('')}
            </div>
        </div>

        <div class="games-tab-content ${isCollectiblesTab ? 'active' : ''}">
            <div class="collectibles-section">
                
                <div class="mystery-box-section">
                    <div class="mystery-box-header">
                        <h3>Mystery Boxes</h3>
                        <p>Get rare collectibles!</p>
                    </div>
                    <div class="mystery-box-container">
                        <div class="mystery-box-card" data-action="pull-gacha" data-cost="1">
                             <div class="mystery-box-visual">
                                 ${MysteryBoxWithRibbonIcon()}
                             </div>
                             <h4>1 Goken Pull</h4>
                             <p>1 rare random<br>costume item.</p>
                             <div class="mystery-box-cost">1 Goken</div>
                        </div>
                        <div class="mystery-box-card ten-pull" data-action="pull-gacha" data-cost="10">
                            <div class="mystery-box-visual">
                               ${TenPullMysteryBoxWithRibbonIcon()}
                            </div>
                            <h4>10 Goken Pull</h4>
                            <p>Guaranteed rare item, avatar, or chance of IRL prize!</p>
                            <div class="mystery-box-cost">10 Gokens</div>
                        </div>
                    </div>
                </div>
                
                <h4 class="collection-header">My Character Collection</h4>
                <div class="collectibles-grid">
                    ${collectiblesData.map(col => `
                        <button class="collectible-item ${col.unlocked ? '' : 'locked'} ${state.userAvatarBase === col.id ? 'selected' : ''}"
                                data-action="select-base"
                                data-base-id="${col.id}"
                                ${!col.unlocked ? 'disabled' : ''}>
                            <div class="collectible-icon">
                                ${avatarSVGs[col.id]}
                            </div>
                            <span>${col.name}</span>
                             ${!col.unlocked ? `<div class="collectible-lock-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </div>` : ''}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <button class="save-avatar-btn" data-action="save-avatar">
            Save Appearance
        </button>
    </div>
`;}

const gokenNavMarkup = () => {
    const isProfileActive = ['profile', 'full-badges', 'share-summary', 'cause-details', 'customize-avatar'].includes(state.gokenPage);
    return `
<nav class="goken-bottom-nav">
    <a href="#" class="goken-nav-item ${state.gokenPage === 'home' ? 'active' : ''}" data-action="navigate" data-page-group="goken" data-page="home">
        ${gokenNavIcons.Home}
        <span>Goken</span>
    </a>
    <a href="#" class="goken-nav-item ${state.gokenPage === 'games' ? 'active' : ''}" data-action="navigate" data-page-group="goken" data-page="games">
        ${gokenNavIcons.Game}
        <span>Game</span>
    </a>
    <a href="#" class="goken-nav-item ${state.gokenPage === 'friends' ? 'active' : ''}" data-action="navigate" data-page-group="goken" data-page="friends">
        ${gokenNavIcons.Friends}
        <span>Friends</span>
    </a>
    <a href="#" class="goken-nav-item ${isProfileActive ? 'active' : ''}" data-action="navigate" data-page-group="goken" data-page="profile">
        ${gokenNavIcons.Profile}
        <span>Profile</span>
    </a>
</nav>
`;}

function gokenZonePageMarkup() {
    const showHeader = !['share-summary', 'cause-details', 'full-badges', 'customize-avatar'].includes(state.gokenPage);
    let pageContent = '';

    switch (state.gokenPage) {
        case 'home': pageContent = gokenHomePageContent(); break;
        case 'games': pageContent = gokenGamesPageMarkup(); break;
        case 'friends': pageContent = gokenFriendsPageMarkup(); break;
        case 'profile': pageContent = gokenProfilePageMarkup(); break;
        case 'full-badges': pageContent = gokenFullBadgesPageMarkup(); break;
        case 'share-summary': pageContent = gokenSharePageMarkup(); break;
        case 'cause-details': pageContent = gokenCausePageMarkup(); break;
        case 'customize-avatar': pageContent = gokenCustomizeAvatarPageMarkup(); break;
    }

    return `
<div class="page-container goken-zone-active" id="goken-zone-page">
    <div class="goken-zone-page-content">
        <header class="goken-header" id="goken-header-main" style="display: ${showHeader ? 'flex' : 'none'}">
             <button class="back-btn" id="back-to-rewards-btn" data-action="navigate" data-page-group="root" data-page="rewards">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                <span>Back</span>
            </button>
            <div class="goken-balance">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FBBF24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <span>89</span>
            </div>
        </header>

        <main id="goken-page-main-content">
            ${pageContent}
        </main>
    </div>
    ${gokenNavMarkup()}
</div>
`;}

// --- MAIN RENDER AND EVENT HANDLING ---

function renderApp() {
    if (!root) return;
    if (state.currentPage === 'rewards') {
        root.innerHTML = RewardsPage();
    } else {
        root.innerHTML = gokenZonePageMarkup();
    }
}

function handleEvent(e: Event) {
    const target = e.target as HTMLElement;
    const actionTarget = target.closest('[data-action]');

    if (!actionTarget) return;
    e.preventDefault();

    const action = actionTarget.getAttribute('data-action');
    const pageGroup = actionTarget.getAttribute('data-page-group');
    const page = actionTarget.getAttribute('data-page');
    const tabGroup = actionTarget.getAttribute('data-tab-group');
    const tab = actionTarget.getAttribute('data-tab');

    if (action === 'navigate') {
        if (pageGroup === 'root' && page) {
            setState({ currentPage: page as 'rewards' | 'gokenZone', gokenPage: 'home' });
        } else if (pageGroup === 'goken' && page) {
            setState({ gokenPage: page as AppState['gokenPage'] });
        }
    } else if (action === 'switch-tab') {
        if (tabGroup === 'gokenGames' && tab) setState({ gokenGamesTab: tab as AppState['gokenGamesTab'] });
        if (tabGroup === 'gokenFriends' && tab) setState({ gokenFriendsTab: tab as AppState['gokenFriendsTab'] });
        if (tabGroup === 'gokenRankings' && tab) setState({ gokenRankingsTab: tab as AppState['gokenRankingsTab'] });
        if (tabGroup === 'gokenCause' && tab) setState({ gokenCauseTab: tab as AppState['gokenCauseTab'] });
        if (tabGroup === 'gokenCustomize' && tab) setState({ gokenCustomizeTab: tab as AppState['gokenCustomizeTab'] });
    } else if (action === 'toggle-accessory') {
        const id = actionTarget.getAttribute('data-accessory-id');
        if (!id) return;
        const currentAccessories = [...state.userAvatarAccessories];
        const index = currentAccessories.indexOf(id);
        if (index > -1) {
            currentAccessories.splice(index, 1);
        } else {
            currentAccessories.push(id);
        }
        setState({ userAvatarAccessories: currentAccessories });
    } else if (action === 'select-base') {
        const id = actionTarget.getAttribute('data-base-id');
        if (id) {
            setState({ userAvatarBase: id });
        }
    } else if (action === 'pull-gacha') {
        const cost = parseInt(actionTarget.getAttribute('data-cost') || '0', 10);
        alert(`You performed a ${cost} Goken Pull! Amazing prizes await! (This is a mock-up)`);
    } else if (action === 'save-avatar') {
        // In a real app, this would save to a backend. Here we just navigate.
        alert('Avatar saved!');
        setState({ gokenPage: 'profile' });
    }
}

// Initial Setup
if (root) {
    root.addEventListener('click', handleEvent);
    renderApp();
}
