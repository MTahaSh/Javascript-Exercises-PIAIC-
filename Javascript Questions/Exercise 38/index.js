let track = 0;
let album;

album = make_album("The Weeknd", "After Hours",4)
console.log(album);
album = make_album("One Direction", "Four",2)
console.log(album);
album = make_album("Drake", "Take Care",4)
console.log(album);


function make_album(artist, title, track)
{
    let album = {
        "Artist": artist,
        'Title':title
    }

    if (track)
{
    album['tracks'] = track;
}

    return album;
}

