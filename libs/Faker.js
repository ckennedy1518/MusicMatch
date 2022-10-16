import { faker } from '@faker-js/faker';

async function createRandomUser() {
    const date = new Date();
    const str = date.getFullYear();
    const bday_end = 18;
    str += "-";
    bday_end += "-"
    str += date.getMonth();
    bday_end += date.getMonth();
    str += "-";
    bday_end += "-"
    str += date.getDate();
    bday_end += date.getDate()
    str += "T00:00:00.000Z"
    bday_end += "T00:00:00.000Z"
    const birthday = faker.date.between('1977-01-01T00:00:00.000Z', bday_end);
    const new_age = str.substring(0,4) - birthday.substring(0,4);
    if (str.substring(5,7) < birthday.substring(5,7)) {
        new_age--;
    } else if (str.substring(5,7) == birthday.substring(5,7)) {
        if (str.substring(8,10) < birthday.substring(8,10)) {
            new_age--;
        }
    }

    const userDoc = firsetore.doc(`users/${user.uid}`);
    const usernameDoc = firestore.doc(`usernames/${formValue}`);

    const batch = firestore.batch();
    batch.set(userDoc, { 
        name: faker.name.firstName() + " " + faker.name.lastName,
        profile_image: faker.image.avatar(),
        age: new_age,
        desc: faker.text()
    });
    batch.set(usernameDoc, { uid: user.uid });

    await batch.commit();
}