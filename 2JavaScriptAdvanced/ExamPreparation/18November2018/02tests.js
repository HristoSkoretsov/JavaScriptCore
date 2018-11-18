let expect=require('chai').expect;
const SoftUniFy=require('./02SofUniFy');

describe('SoftUniFy',function () {
    let softuni;
    beforeEach(function () {
        softuni=new SoftUniFy();
    });

    it('Proper object', function () {
        let result = softuni;
        let obj = {};

        expect(result).to.be.eql(result);
    });

    it('downloadSong',function () {
        softuni.downloadSong('Nikola', 'Love', 'ola');
        expect(softuni.allSongs['Nikola']['songs'].toString()).to.equal("Love - ola");
    });
    it('songsList',function () {
            expect(softuni.songsList).to.equal("Your song list is empty");

    });
    it('playSong',function () {
        let song = 'ala';
        expect(softuni.playSong('ala')).to.equal(`You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`);

    });


    it('rateArtist',function () {
        softuni.downloadSong('Nikola', 'Love', 'ola');
        //softuni.allSongs['Nikola'] = {rate: 1, votes: 0, songs: ['ola']};
        expect(softuni.rateArtist('Nikola')).to.equal(0);

    });


});