const btnSubmit = document.getElementById("btn-submit");
const queryBox = document.querySelector(".q-box");

async function getQueries() {
    try {
        let result = await fetch("../jsons/query_data.json");
        let resultJson = await result.json();
        let queries = resultJson.queries;
        queries = queries.map((query) => {
            const { q_no, q_text } = query.question;
            const { choice_name, choice } = query.choices;
            console.log({ q_no, q_text, choice_name, choice });
            return { q_no, q_text, choice_name, choice };
        });
        return queries;
    } catch (error) {
        console.log(error);
    }
}

function displayQueries(queries) {
    let qArea = "";
    queries.forEach((query) => {
        qArea += `<div class="qf">
                    <!-- question section -->
                        <div class="q-section">
                            ${query.q_no}. ${query.q_text}
                        </div>
                        <!-- choice section -->
                        <div class="choice-section">
                            <input
                                class="choice"
                                type="radio"
                                label="${query.choice[0].label_value}"
                                name="${query.choice_name}"
                                value="${query.choice[0].scale_value}"
                            />
                            <input
                                class="choice"
                                type="radio"
                                label="${query.choice[1].label_value}"
                                name="${query.choice_name}"
                                value="${query.choice[1].scale_value}"
                            />
                            <input
                                class="choice"
                                type="radio"
                                label="${query.choice[2].label_value}"
                                name="${query.choice_name}"
                                value="${query.choice[2].scale_value}"
                            />
                            <input
                                class="choice"
                                type="radio"
                                label="${query.choice[3].label_value}"
                                name="${query.choice_name}"
                                value="${query.choice[3].scale_value}"
                            />
                        </div>
                </div>`;
    });
    queryBox.innerHTML = qArea;
}

getQueries()
    .then((queries) => {
        displayQueries(queries);
    })
    .catch((error) => {
        console.log(error);
    });
