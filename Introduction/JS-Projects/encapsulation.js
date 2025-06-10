class Playlist {
    #tracks = [];

    addTrack(title){
        this.#tracks.push(title);
    }

     removeTrack(title) {
    this.#tracks = this.#tracks.filter(track => track !== title);
  }

    get count(){
        return this.#tracks.length;
    }
}

const p = new Playlist()
p.addTrack('Song A')
p.addTrack('Song B')
console.log(p.count)        // 2
p.removeTrack('Song A')
console.log(p.count)        // 1
