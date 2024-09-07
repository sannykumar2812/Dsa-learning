const employees = {
    'Ram': "Dev",
    'Sam': "Dev",
    'Anusha': "QA",
    'John': "Dev",
};

const groupedByPost = {};

for (const name in employees) {

    const post = employees[name];

    if (!groupedByPost[post]) {
        groupedByPost[post] = [];
    }


    groupedByPost[post].push(name);
}