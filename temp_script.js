    const topics = [
      {
        id: 'carbohydrates',
        title: 'Carbohydrates',
        description: 'Learn carbs structure, types, and functions in the body.',
        questions: [
          {
            text: 'What is the main function of carbohydrates in the body?',
            options: ['Energy source', 'Build DNA', 'Store oxygen', 'Regulate temperature'],
            answer: 0,
            explanation: 'Carbohydrates are primarily used by the body as a quick energy source, especially glucose for cells.',
          },
          {
            text: 'Which molecule is a simple carbohydrate?',
            options: ['Glucose', 'Cellulose', 'Starch', 'Glycogen'],
            answer: 0,
            explanation: 'Glucose is a monosaccharide, the simplest type of carbohydrate used directly for energy.',
          },
          {
            text: 'Which carbohydrate is used for long-term energy storage in plants?',
            options: ['Starch', 'Sucrose', 'Glucose', 'Fructose'],
            answer: 0,
            explanation: 'Plants store energy as starch, a polysaccharide made of many glucose molecules.',
          },
          {
            text: 'What sugar is formed when glucose and fructose join together?',
            options: ['Sucrose', 'Cellulose', 'Lactose', 'Maltose'],
            answer: 0,
            explanation: 'Sucrose is the disaccharide formed by glucose and fructose.',
          },
          {
            text: 'Which carbohydrate is the main structural component of plant cell walls?',
            options: ['Cellulose', 'Glycogen', 'Starch', 'Sucrose'],
            answer: 0,
            explanation: 'Cellulose is a plant structural carbohydrate that provides strength to cell walls.',
          },
          {
            text: 'Where is glycogen stored in the human body?',
            options: ['Liver and muscles', 'Lungs and heart', 'Skin and hair', 'Bones and teeth'],
            answer: 0,
            explanation: 'Glycogen is stored in the liver and muscle tissue to supply energy when needed.',
          },
          {
            text: 'Which type of carbohydrate is used fastest by the body?',
            options: ['Monosaccharides', 'Polysaccharides', 'Disaccharides', 'Fiber'],
            answer: 0,
            explanation: 'Monosaccharides like glucose are absorbed quickly and used immediately for energy.',
          },
          {
            text: 'What is dietary fiber best known for?',
            options: ['Digestive support', 'Energy storage', 'Protein build-up', 'Hormone production'],
            answer: 0,
            explanation: 'Dietary fiber supports digestion and helps move food through the digestive tract.',
          },
          {
            text: 'How many carbon atoms are in a hexose sugar such as glucose?',
            options: ['5', '6', '3', '4'],
            answer: 1,
            explanation: 'Hexose sugars like glucose contain six carbon atoms.',
          },
          {
            text: 'Which carbohydrate type is not digestible by humans?',
            options: ['Starch', 'Fiber', 'Glucose', 'Sucrose'],
            answer: 1,
            explanation: 'Dietary fiber is a carbohydrate humans cannot fully digest, but it aids digestion.',
          },
          {
            text: 'Which bond joins monosaccharides into disaccharides or polysaccharides?',
            options: ['Glycosidic bond', 'Peptide bond', 'Ester bond', 'Hydrogen bond'],
            answer: 0,
            explanation: 'Monosaccharides are connected by glycosidic bonds to create larger carbohydrates.',
          },
          {
            text: 'Cellulose is formed from glucose units linked by which type of bonding?',
            options: ['β-1,4 glycosidic bonds', 'α-1,4 glycosidic bonds', 'Peptide bonds', 'Phosphodiester bonds'],
            answer: 0,
            explanation: 'Cellulose has β-1,4 glycosidic bonds, giving plant cell walls strength and rigidity.',
          },
          {
            text: 'Why is sucrose considered a non-reducing sugar?',
            options: ['Both anomeric carbons are involved in the bond', 'It contains no carbon atoms', 'It is not soluble', 'It is an amino acid'],
            answer: 0,
            explanation: 'Sucrose is non-reducing because both anomeric carbons are tied up in the glycosidic linkage.',
          },
          {
            text: 'Hydrolysis of a glycosidic bond requires which substance?',
            options: ['Water', 'Oxygen', 'ATP', 'Carbon dioxide'],
            answer: 0,
            explanation: 'Hydrolysis breaks glycosidic bonds by adding water, splitting the carbohydrate into smaller sugars.',
          },
        ],
      },
      {
        id: 'proteins',
        title: 'Proteins',
        description: 'Review protein roles, building blocks, and how they help your body.',
        questions: [
          {
            text: 'What are proteins made of?',
            options: ['Amino acids', 'Fatty acids', 'Monosaccharides', 'Nucleotides'],
            answer: 0,
            explanation: 'Proteins are made of amino acids linked together into chains called polypeptides.',
          },
          {
            text: 'Which function is performed by proteins?',
            options: ['Transport oxygen', 'Store genetic code', 'Carry electrical signals', 'Provide insulation'],
            answer: 0,
            explanation: 'Hemoglobin is a protein that transports oxygen in the blood.',
          },
          {
            text: 'What is the shape of a folded protein important for?',
            options: ['Function and activity', 'Color', 'Mass', 'Buoyancy'],
            answer: 0,
            explanation: 'A protein’s 3D shape determines how it interacts with other molecules and how it functions.',
          },
          {
            text: 'What type of protein speeds up chemical reactions?',
            options: ['Enzyme', 'Hormone', 'Antibody', 'Collagen'],
            answer: 0,
            explanation: 'Enzymes are proteins that speed up chemical reactions in the body.',
          },
          {
            text: 'What bond connects amino acids in a protein?',
            options: ['Peptide bond', 'Hydrogen bond', 'Ionic bond', 'Van der Waals bond'],
            answer: 0,
            explanation: 'A peptide bond links amino acids together to form proteins.',
          },
          {
            text: 'Which protein helps defend the body against infection?',
            options: ['Antibody', 'Insulin', 'Collagen', 'Keratin'],
            answer: 0,
            explanation: 'Antibodies are proteins that recognize and help remove germs from the body.',
          },
          {
            text: 'A complete protein contains:',
            options: ['All essential amino acids', 'Only one amino acid', 'Extra carbohydrates', 'No nitrogen'],
            answer: 0,
            explanation: 'A complete protein has all nine essential amino acids the body cannot make itself.',
          },
          {
            text: 'What does denaturation do to a protein?',
            options: ['Changes its shape', 'Adds more amino acids', 'Removes carbohydrates', 'Increases water content'],
            answer: 0,
            explanation: 'Denaturation changes a protein’s shape, usually destroying its normal function.',
          },
          {
            text: 'Which organ makes many digestive enzymes that break down proteins?',
            options: ['Pancreas', 'Liver', 'Heart', 'Skin'],
            answer: 0,
            explanation: 'The pancreas produces digestive enzymes like trypsin that break down proteins.',
          },
          {
            text: 'Which protein gives strength to skin, tendons, and bones?',
            options: ['Collagen', 'Myoglobin', 'Insulin', 'Lactase'],
            answer: 0,
            explanation: 'Collagen is a structural protein that helps keep skin, tendons, and bones strong.',
          },
        ],
      },
      {
        id: 'lipids',
        title: 'Lipids',
        description: 'Study fats, oils, and membrane-building lipids with simple quizzes.',
        questions: [
          {
            text: 'What is a major role of lipids in cells?',
            options: ['Cell membrane structure', 'DNA replication', 'Protein synthesis', 'Oxygen transport'],
            answer: 0,
            explanation: 'Lipids form the cell membrane bilayer and help maintain cell structure and control transport.',
          },
          {
            text: 'Which molecule is a lipid?',
            options: ['Triglyceride', 'Glucose', 'Fructose', 'RNA'],
            answer: 0,
            explanation: 'Triglycerides are fats used for energy storage and insulation, making them lipids.',
          },
          {
            text: 'Lipids are most often used for:',
            options: ['Long-term energy storage', 'Fast energy bursts', 'Genetic code', 'Muscle contraction'],
            answer: 0,
            explanation: 'Lipids store energy efficiently for long-term use.',
          },
          {
            text: 'What kind of lipid makes up the outer layer of cells?',
            options: ['Phospholipid', 'Glucose', 'Starch', 'Cellulose'],
            answer: 0,
            explanation: 'Phospholipids form the cell membrane and help control what enters and leaves the cell.',
          },
          {
            text: 'Which lipid type is usually solid at room temperature?',
            options: ['Saturated fat', 'Unsaturated fat', 'Glucose', 'Protein'],
            answer: 0,
            explanation: 'Saturated fats are typically solid at room temperature.',
          },
          {
            text: 'A steroid is a type of:',
            options: ['Lipid', 'Protein', 'Carbohydrate', 'Nucleic acid'],
            answer: 0,
            explanation: 'Steroids are lipids that include hormones like cholesterol.',
          },
          {
            text: 'Wax is a lipid that is often used for:',
            options: ['Waterproofing', 'Digestion', 'Building muscle', 'Storing energy'],
            answer: 0,
            explanation: 'Waxes provide a waterproof coating on leaves, feathers, and skin.',
          },
          {
            text: 'What is the main difference between saturated and unsaturated fats?',
            options: ['Double bonds', 'Color', 'Size', 'Proteins'],
            answer: 0,
            explanation: 'Saturated fats have single bonds between carbons while unsaturated fats have one or more double bonds.',
          },
          {
            text: 'Which lipid is important for making vitamin D and hormones?',
            options: ['Cholesterol', 'Starch', 'Glucose', 'Protein'],
            answer: 0,
            explanation: 'Cholesterol is a lipid that the body uses to make vitamin D and hormones.',
          },
          {
            text: 'Why do lipids not mix well with water?',
            options: ['They are nonpolar', 'They are acidic', 'They are charged', 'They are magnetic'],
            answer: 0,
            explanation: 'Lipids are nonpolar molecules, so they do not dissolve in water.',
          },
        ],
      },
      {
        id: 'nucleic_acids',
        title: 'Nucleic Acids',
        description: 'Master DNA, RNA, base pairing, and genetic information.',
        questions: [
          {
            text: 'What are the building blocks of nucleic acids?',
            options: ['Nucleotides', 'Amino acids', 'Fatty acids', 'Monosaccharides'],
            answer: 0,
            explanation: 'Nucleotides are the monomers that form DNA and RNA.',
          },
          {
            text: 'Which base is found only in RNA?',
            options: ['Uracil', 'Thymine', 'Adenine', 'Cytosine'],
            answer: 0,
            explanation: 'Uracil replaces thymine in RNA.',
          },
          {
            text: 'DNA strands are held together by which type of bonds?',
            options: ['Hydrogen bonds', 'Peptide bonds', 'Glycosidic bonds', 'Ionic bonds'],
            answer: 0,
            explanation: 'Hydrogen bonds connect complementary bases between the two DNA strands.',
          },
          {
            text: 'Which sugar is found in DNA?',
            options: ['Deoxyribose', 'Ribose', 'Glucose', 'Fructose'],
            answer: 0,
            explanation: 'DNA contains deoxyribose sugar in its backbone.',
          },
          {
            text: 'What does mRNA do in the cell?',
            options: ['Carries genetic code from DNA to ribosomes', 'Stores energy', 'Builds membranes', 'Transports oxygen'],
            answer: 0,
            explanation: 'mRNA carries instructions for protein synthesis from the nucleus to ribosomes.',
          },
          {
            text: 'Which nitrogen base pairs with adenine in DNA?',
            options: ['Thymine', 'Guanine', 'Cytosine', 'Uracil'],
            answer: 0,
            explanation: 'Adenine pairs with thymine in DNA.',
          },
          {
            text: 'What is the overall shape of a DNA molecule?',
            options: ['Double helix', 'Single strand', 'Sheet', 'Ring'],
            answer: 0,
            explanation: 'DNA forms a double helix shape.',
          },
          {
            text: 'Which process makes a copy of DNA before cell division?',
            options: ['Replication', 'Translation', 'Transcription', 'Fermentation'],
            answer: 0,
            explanation: 'DNA replication copies the genetic material so each new cell has the same DNA.',
          },
        ],
      },
      {
        id: 'english_grammar',
        title: 'English Grammar',
        description: 'Practice sentence structure, tenses, and grammar rules.',
        questions: [
          {
            text: 'Choose the correct sentence:',
            options: ['She has finished her work.', 'She have finished her work.', 'She finished has her work.', 'Has she finished her work.'],
            answer: 0,
            explanation: 'The correct form is "She has finished her work." because the singular subject requires "has."',
          },
          {
            text: 'Which sentence uses past tense correctly?',
            options: ['They walked to school.', 'They walk to school.', 'They will walk to school.', 'They walking to school.'],
            answer: 0,
            explanation: '"Walked" is the correct past tense form for the verb "walk."',
          },
          {
            text: 'Select the sentence with the correct subject-verb agreement:',
            options: ['He goes to the store.', 'He go to the store.', 'He going to the store.', 'He gone to the store.'],
            answer: 0,
            explanation: 'The subject "he" requires the verb form "goes."',
          },
          {
            text: 'Which sentence uses an article correctly?',
            options: ['She bought an apple.', 'She bought a apple.', 'She bought apple.', 'She bought the apple.'],
            answer: 0,
            explanation: '"An" is correct before a vowel sound like "apple."',
          },
          {
            text: 'Choose the correct comparative form:',
            options: ['She is taller than him.', 'She is more tall than him.', 'She is most tall than him.', 'She is tall than him.'],
            answer: 0,
            explanation: '"Taller" is the correct comparative form of "tall."',
          },
          {
            text: 'Which sentence is written in passive voice?',
            options: ['The cake was baked by her.', 'She baked the cake.', 'She will bake the cake.', 'She is baking the cake.'],
            answer: 0,
            explanation: 'Passive voice uses the object as the subject and includes a form of "to be."',
          },
          {
            text: 'Choose the correct pronoun:',
            options: ['This is hers.', 'This is her.', 'This is she.', 'This is him.'],
            answer: 0,
            explanation: '"Hers" is the correct possessive pronoun in this sentence.',
          },
          {
            text: 'Which sentence uses a conjunction correctly?',
            options: ['I wanted to study, but I was tired.', 'I wanted to study but I was tired.', 'I wanted to study nor I was tired.', 'I wanted to study so I was tired.'],
            answer: 0,
            explanation: '"But" correctly connects two contrasting ideas.',
          },
          {
            text: 'Choose the correct form of the verb for future tense:',
            options: ['She will travel tomorrow.', 'She travels tomorrow.', 'She traveled tomorrow.', 'She has traveled tomorrow.'],
            answer: 0,
            explanation: '"Will travel" is the correct simple future tense form.',
          },
          {
            text: 'Select the sentence with correct punctuation:',
            options: ['He asked, "Can I come?"', 'He asked "Can I come?"', 'He asked, Can I come?', 'He asked "Can I come?".'],
            answer: 0,
            explanation: 'Quotation marks and the comma are used correctly in the first sentence.',
          },
        ],
      },
      {
        id: 'english_vocabulary',
        title: 'English Vocabulary',
        description: 'Build word knowledge with synonyms, antonyms, and definitions.',
        questions: [
          {
            text: 'What is a synonym for "happy"?',
            options: ['Joyful', 'Slow', 'Angry', 'Boring'],
            answer: 0,
            explanation: '"Joyful" means the same as "happy."',
          },
          {
            text: 'What is the opposite of "difficult"?',
            options: ['Easy', 'Challenging', 'Impossible', 'Heavy'],
            answer: 0,
            explanation: '"Easy" is the antonym of "difficult."',
          },
          {
            text: 'What does "fragile" mean?',
            options: ['Easily broken', 'Very large', 'Full of energy', 'Made of metal'],
            answer: 0,
            explanation: '"Fragile" means "easily broken."',
          },
          {
            text: 'Which word means "to look at carefully"?',
            options: ['Examine', 'Ignore', 'Destroy', 'Hide'],
            answer: 0,
            explanation: '"Examine" means "to look at carefully."',
          },
          {
            text: 'What does "origin" refer to?',
            options: ['Beginning', 'End', 'Distance', 'Amount'],
            answer: 0,
            explanation: '"Origin" refers to the beginning or source of something.',
          },
          {
            text: 'What is a synonym for "brave"?',
            options: ['Courageous', 'Fearful', 'Weak', 'Sad'],
            answer: 0,
            explanation: '"Courageous" is a synonym of "brave."',
          },
          {
            text: 'Which word describes something very small?',
            options: ['Tiny', 'Huge', 'Bright', 'Loud'],
            answer: 0,
            explanation: '"Tiny" describes something very small.',
          },
          {
            text: 'What does "frequent" mean?',
            options: ['Happening often', 'Happening rarely', 'Very loud', 'Very quiet'],
            answer: 0,
            explanation: '"Frequent" means happening often.',
          },
        ],
      },
      {
        id: 'english_reading',
        title: 'English Reading',
        description: 'Practice comprehension and inference from short passages.',
        questions: [
          {
            text: 'If a character is described as "cheerful," they are likely:',
            options: ['Happy', 'Angry', 'Hungry', 'Tired'],
            answer: 0,
            explanation: '"Cheerful" means happy or positive.',
          },
          {
            text: 'A main idea is the:',
            options: ['Most important point', 'First sentence', 'Number of words', 'Color of the text'],
            answer: 0,
            explanation: 'The main idea is the most important point of a passage.',
          },
          {
            text: 'If something is "likely," it is:',
            options: ['Probable', 'Impossible', 'Large', 'Expensive'],
            answer: 0,
            explanation: '"Likely" means it probably will happen.',
          },
          {
            text: 'A conclusion is drawn from:',
            options: ['Evidence in the passage', 'The title only', 'The author’s name', 'The page number'],
            answer: 0,
            explanation: 'A conclusion comes from evidence in the passage.',
          },
          {
            text: 'If the author uses the word "anxious," the tone is likely:',
            options: ['Nervous', 'Relaxed', 'Funny', 'Cold'],
            answer: 0,
            explanation: '"Anxious" suggests a nervous or worried tone.',
          },
          {
            text: 'What is an inference?',
            options: ['A smart guess based on clues', 'A direct quote', 'A summary of every detail', 'The author’s name'],
            answer: 0,
            explanation: 'An inference is a conclusion made using evidence and reasoning.',
          },
          {
            text: 'If a passage says the sky was gray and cold, the mood is probably:',
            options: ['Gloomy', 'Excited', 'Joyful', 'Peaceful'],
            answer: 0,
            explanation: 'Gray and cold imagery often creates a gloomy mood.',
          },
          {
            text: 'Which sentence is a detail rather than a main idea?',
            options: ['The cat ate all the food.', 'Cats often sleep in warm places.', 'Animals need water to survive.', 'Pets can be loving companions.'],
            answer: 0,
            explanation: 'That sentence is a specific detail about what the cat did.',
          },
        ],
      },
    ];

    const topicList = document.getElementById('topics');

    function openQuiz(topicId) {
      selectedTopic = topics.find(topic => topic.id === topicId);
      if (!selectedTopic) return;
      quizTitle.textContent = selectedTopic.title + ' Quiz';
      quizSubtitle.textContent = 'Review the questions and read the explanation after each answer.';
      quizSection.classList.remove('hidden');
      updateTopicInfo();
      updateQuestionCountOptions();
      scrollToQuiz();
    }

    function updateTopicInfo() {
      if (!selectedTopic) {
        topicInfo.classList.add('hidden');
        return;
      }
      const count = selectedTopic.questions.length;
      topicInfo.textContent = `This topic has ${count} questions available. Use custom questions count up to ${count}. Unlimited questions is only available in Study mode.`;
      topicInfo.classList.remove('hidden');
      customQuestionCount.max = count;
      customQuestionHint.textContent = `(max ${count})`;
    }

    function updateQuestionCountOptions() {
      const unlimitedOption = questionCountMode.querySelector('option[value="unlimited"]');
      if (quizMode.value === 'study') {
        unlimitedOption.hidden = false;
        unlimitedOption.disabled = false;
      } else {
        unlimitedOption.hidden = true;
        unlimitedOption.disabled = true;
        if (questionCountMode.value === 'unlimited') {
          questionCountMode.value = 'all';
        }
      }
      updateCustomQuestionVisibility();
    }

    function setTimerDisplay() {
      if (timerValue === null) {
        timerDisplay.textContent = 'Unlimited';
        return;
      }
      const minutes = Math.floor(timerValue / 60);
      const seconds = timerValue % 60;
      timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer(seconds) {
      clearInterval(timerInterval);
      timerValue = seconds;
      if (seconds === null) {
        setTimerDisplay();
        return;
      }
      setTimerDisplay();
      timerInterval = setInterval(() => {
        timerValue -= 1;
        setTimerDisplay();
        if (timerValue <= 0) {
          clearInterval(timerInterval);
          endQuiz();
        }
      }, 1000);
    }

    function startQuiz() {
      if (!selectedTopic) {
        alert('Please select a topic first.');
        return;
      }
      score = 0;
      currentIndex = 0;
      questionNumber = 1;
      userAnswers = [];
      currentMode = quizMode.value;
      const selectedCountMode = questionCountMode.value;
      const availableQuestions = [...selectedTopic.questions].sort(() => 0.5 - Math.random());
      infiniteStudyMode = selectedCountMode === 'unlimited' && currentMode === 'study';
      if (selectedCountMode === 'all' || infiniteStudyMode) {
        activeQuestions = availableQuestions;
      } else if (selectedCountMode === 'custom') {
        const customValue = parseInt(customQuestionCount.value, 10);
        const validCount = Number.isNaN(customValue) || customValue < 1
          ? availableQuestions.length
          : Math.min(customValue, availableQuestions.length);
        activeQuestions = availableQuestions.slice(0, validCount);
        if (customValue > validCount) {
          customQuestionCount.value = validCount;
        }
      } else {
        activeQuestions = availableQuestions;
      }
      quizActive = true;
      resultBox.classList.add('hidden');
      resultDetails.classList.add('hidden');
      explanationBox.classList.add('hidden');
      nextQuestionButton.classList.add('hidden');
      questionBox.classList.remove('hidden');
      document.getElementById('quizSetupArea').classList.add('hidden');
      document.getElementById('quizPlayArea').classList.remove('hidden');
      scoreDisplay.textContent = currentMode === 'study' && infiniteStudyMode
        ? `Correct 0`
        : currentMode === 'study'
          ? `0 / ${activeQuestions.length}`
          : `Question 1 / ${activeQuestions.length}`;
      questionBox.dataset.answerLocked = 'false';
      showReviewsButton.classList.add('hidden');

      if (currentMode === 'study') {
        quizSubtitle.textContent = infiniteStudyMode
          ? 'Study mode: unlimited questions with random review and answer order.'
          : 'Study mode: see correct answers and explanations immediately.';
      } else {
        quizSubtitle.textContent = 'Test mode: answer all questions without feedback until the end.';
      }

      let selectedTime = timerMode.value;
      if (selectedTime === 'unlimited') {
        startTimer(null);
      } else if (selectedTime === 'ten') {
        startTimer(10 * 60);
      } else if (selectedTime === 'five') {
        startTimer(5 * 60);
      } else {
        const customValue = parseInt(customMinutes.value, 10);
        startTimer(Number.isNaN(customValue) || customValue <= 0 ? 10 * 60 : customValue * 60);
      }
      showQuestion();
    }

    function showQuestion() {
      if (!infiniteStudyMode && currentIndex >= activeQuestions.length) {
        endQuiz();
        return;
      }
      currentQuestion = infiniteStudyMode
        ? activeQuestions[Math.floor(Math.random() * activeQuestions.length)]
        : activeQuestions[currentIndex];
      const question = currentQuestion;
      const letters = ['a', 'b', 'c', 'd', 'e'];
      currentQuestionOptions = question.options
        .map((option, index) => ({ text: option, isCorrect: index === question.answer }))
        .sort(() => 0.5 - Math.random());

      questionText.textContent = `Q${infiniteStudyMode ? questionNumber : currentIndex + 1}. ${question.text}`;
      // Clear previous button styling
      Array.from(optionsList.querySelectorAll('.option-button')).forEach(btn => {
        btn.classList.remove('correct', 'wrong', 'selected');
      });
      optionsList.innerHTML = currentQuestionOptions.map((option, index) => {
        const label = letters[index] || String.fromCharCode(65 + index);
        return `<li><button class="option-button" data-index="${index}"><strong>${label}.</strong> ${option.text}</button></li>`;
      }).join('');

      explanationBox.classList.add('hidden');
      nextQuestionButton.classList.add('hidden');
      nextQuestionButton.textContent = infiniteStudyMode ? 'Next question' : (currentIndex === activeQuestions.length - 1 ? 'Done' : 'Next question');
      questionBox.dataset.answerLocked = 'false';
      questionBox.scrollIntoView({ behavior: 'smooth' });
    }

    function handleOptionClick(event) {
      const button = event.target.closest('.option-button');
      if (!button || !quizActive) return;
      if (questionBox.dataset.answerLocked === 'true') return;
      const selectedIndex = Number(button.dataset.index);
      const selectedOption = currentQuestionOptions[selectedIndex];
      const question = currentQuestion || activeQuestions[currentIndex];
      const buttons = Array.from(optionsList.querySelectorAll('.option-button'));
      const correctOption = currentQuestionOptions.find(option => option.isCorrect);
      const correctText = correctOption ? correctOption.text : '';
      const isCorrect = selectedOption ? selectedOption.isCorrect : false;

      buttons.forEach(btn => btn.disabled = true);
      buttons.forEach((btn, index) => {
        if (currentMode === 'study' && currentQuestionOptions[index].isCorrect) {
          btn.classList.add('correct');
        }
      });

      if (currentMode === 'study') {
        if (!isCorrect) {
          button.classList.add('wrong');
        }
        explanationBox.textContent = question.explanation;
        explanationBox.classList.remove('hidden');
      } else {
        button.classList.add('selected');
        explanationBox.classList.add('hidden');
      }

      if (isCorrect) {
        score += 1;
      }
      scoreDisplay.textContent = currentMode === 'study' && infiniteStudyMode
        ? `Correct ${score}`
        : currentMode === 'study'
          ? `${score} / ${activeQuestions.length}`
          : `Question ${Math.min(currentIndex + 2, activeQuestions.length)} / ${activeQuestions.length}`;

      if (infiniteStudyMode) {
        userAnswers.push({
          questionText: question.text,
          selectedText: selectedOption ? selectedOption.text : '',
          isCorrect,
          correctText,
          explanation: question.explanation,
        });
      } else {
        userAnswers[currentIndex] = {
          questionText: question.text,
          selectedText: selectedOption ? selectedOption.text : '',
          isCorrect,
          correctText,
          explanation: question.explanation,
        };
      }

      explanationBox.classList.remove('hidden');
      nextQuestionButton.classList.remove('hidden');
      questionBox.dataset.answerLocked = 'true';
    }

    function endQuiz() {
      quizActive = false;
      clearInterval(timerInterval);
      questionBox.classList.add('hidden');
      explanationBox.classList.add('hidden');
      nextQuestionButton.classList.add('hidden');
      resultBox.classList.remove('hidden');
      showReviewsButton.classList.remove('hidden');
      document.getElementById('quizSetupArea').classList.remove('hidden');
      document.getElementById('quizPlayArea').classList.add('hidden');
      const resultCount = infiniteStudyMode ? userAnswers.length : activeQuestions.length;
      scoreDisplay.textContent = `${score} / ${resultCount}`;
      const percentage = resultCount ? Math.round((score / resultCount) * 100) : 0;
      resultText.innerHTML = `You scored <strong>${score} / ${resultCount}</strong> (${percentage}%).<br />` +
        `Click “Show full reviews” if you want to see all questions, answers, and explanations.`;

      resultDetails.innerHTML = userAnswers.map((entry, index) => {
        return `
          <div style="margin-bottom:18px;">
            <strong>Q${index + 1}: ${entry.questionText}</strong>
            <p><strong>Your answer:</strong> ${entry.selectedText}${entry.isCorrect ? ' ✅' : ' ❌'}</p>
            <p><strong>Correct answer:</strong> ${entry.correctText}</p>
            <p><strong>Explanation:</strong> ${entry.explanation}</p>
          </div>
        `;
      }).join('');
      showReviewsButton.classList.remove('hidden');
      resultDetails.classList.add('hidden');
      timerDisplay.textContent = timerValue === null ? 'Unlimited' : timerValue <= 0 ? '0:00' : timerDisplay.textContent;
    }

    function scrollToQuiz() {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }

    function updateCustomTimeVisibility() {
      customTimeLabel.classList.toggle('hidden', timerMode.value !== 'custom');
    }

    function updateCustomQuestionVisibility() {
      document.getElementById('customQuestionLabel').classList.toggle('hidden', questionCountMode.value !== 'custom');
    }

    topicList.addEventListener('click', event => {
      const card = event.target.closest('.topic-card');
      if (!card) return;
      openQuiz(card.dataset.topicId);
    });

    startQuizButton.addEventListener('click', startQuiz);
    retryButton.addEventListener('click', () => {
      explanationBox.classList.add('hidden');
      resultBox.classList.add('hidden');
      startQuiz();
    });
    optionsList.addEventListener('click', handleOptionClick);
    questionCountMode.addEventListener('change', updateCustomQuestionVisibility);
    quizMode.addEventListener('change', updateQuestionCountOptions);
    nextQuestionButton.addEventListener('click', () => {
      if (infiniteStudyMode) {
        questionNumber += 1;
        showQuestion();
      } else {
        currentIndex += 1;
        if (currentIndex >= activeQuestions.length) {
          endQuiz();
        } else {
          showQuestion();
        }
      }
    });
    showReviewsButton.addEventListener('click', () => {
      resultDetails.classList.toggle('hidden');
      showReviewsButton.textContent = resultDetails.classList.contains('hidden')
        ? 'Show full reviews'
        : 'Hide full reviews';
    });
    timerMode.addEventListener('change', updateCustomTimeVisibility);

    renderTopics();
    updateCustomTimeVisibility();
    updateCustomQuestionVisibility();
