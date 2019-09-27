const functions = require('firebase-functions');
exports.useWildcard = functions.firestore
    .document('users/{userId}')
    .onUpdate((change, context) => {
        const data = change.after.data();
        const previousData = change.before.data();

        data.dummy = new Date()


        // Then return a promise of a set operation to update the count
        return change.after.ref.set({
            name_change_count: count + 1
        }, {merge: true});
    });