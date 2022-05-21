/* eslint-disable camelcase */

// migration utama kita tuliskan di dalam fungsi up dan kebutuhan rollback kita tuliskan di dalam fungsi down
exports.up = (pgm) => {
    pgm.createTable('songs', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        title: {
            type: 'TEXT',
            notNull: true,
        },
        year: {
            type: 'INTEGER',
            notNull: true,
        },
        genre: {
            type: 'TEXT',
            notNull: false,
        },
        performer: {
            type: 'TEXT',
            notNull: true,
        },
        duration: {
            type: 'INTEGER',
            notNull: false,
        },
        albumId: {
            type: 'TEXT',
            notNull: false,
        },
    });

    pgm.addConstraint('songs', 'fk_songs.album_id_albums.id', 'FOREIGN KEY("albumId") REFERENCES albums(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
    pgm.dropTable('songs');
    pgm.dropConstraint('songs', 'fk_songs.album_id_albums.id');
};
