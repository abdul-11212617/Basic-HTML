
        function checkResult() {
            let marks = parseInt(document.getElementById("marksInput").value);
            let finalMarks = marks;
            let resultText = "";

            if (marks >= 34) {
                resultText = `Pass  (Marks: ${marks})`;
            } 
            else if (marks == 32 || marks == 33) {
                finalMarks = 34;
                resultText = `Pass with Bonus  (Original: ${marks}, Final: ${finalMarks})`;
            } 
            else {
                resultText = `Fail  (Marks: ${marks})`;
            }
            document.getElementById("result").innerText = resultText;
        }