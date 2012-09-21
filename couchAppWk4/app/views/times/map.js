function ( doc ) {
  if ( doc._id !== "_design/week4" ) {
    emit(doc._id, { 
        "Options"    : doc.Options,
        "reservist"  : doc.reservist,
        "numberGames": doc.numberGames,
        "location"   : doc.location,
        "date"       : doc.date,
        "notes"      : doc.notes, 
        "rev"        : doc._rev
    });
  }
};