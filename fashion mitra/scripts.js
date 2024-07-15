// scripts.js

function selectOutfit(outfitId) {
    localStorage.setItem('selectedOutfit', outfitId);
    window.location.href = 'finalize.html';
}
