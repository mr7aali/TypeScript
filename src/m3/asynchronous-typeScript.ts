const makePromise = () => {
    return new Promise<string>((resolve, reject) => {
        const data:string = "Data is fetched";
        if (data) {
            resolve(data);
        } else {
            reject("Failed to feted data!")
        }
    });
};

const makePromiseBoolean = () => {
    return new Promise<boolean>((resolve, reject) => {
        const data:boolean = false;
        if (data) {
            resolve(data);
        } else {
            reject("Failed to feted data!")
        }
    });
};

const makePromiseObject = () => {
    return new Promise<object>((resolve, reject) => {
        const data:{data:string} = {data:"This is data"};
        if (data) {
            resolve(data);
        } else {
            reject("Failed to feted data!")
        }
    });
};

const gerPromiseData = async ():Promise<string> => {
    const data = await makePromise();
    return data;
}

const gerPromiseDataBoolean = async ():Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
}

const gerPromiseDataObject = async ():Promise<object> => {
    const data = await makePromiseObject();
    return data;
}