const CURRENT_DISCORD = "https://discord.gg/x6QjZcUwhQ"

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Jailbreak text copied to clipboard');
    }).catch(err => {
      alert('Failed to copy text: ', err);
    });
  }
  
  function toggleTheme() {
    prompt("i am lazy copy and paste link below:", CURRENT_DISCORD)
    }
    
    async function fetchData() {
        try {
          const response = await fetch('jailbreaks.json');
          const data = await response.json();
          
          displayFreeJailbreaks(data.freeJailbreaks);
          displayPremiumJailbreakCount(data.premiumJailbreaksCount);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
      function displayFreeJailbreaks(jailbreaks) {
        const jailbreakList = document.getElementById('free-jailbreak-list');
        jailbreakList.innerHTML = '';
      
        jailbreaks.forEach(jailbreak => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <h3>${jailbreak.title}</h3>
            <pre><code>${jailbreak.content}</code></pre>
            <button onclick="copyToClipboard('${jailbreak.content}')">Copy</button>
          `;
          jailbreakList.appendChild(listItem);
        });
      }
      
      function displayPremiumJailbreakCount(count) {
        const premiumCount = document.getElementById('premium-jailbreak-count');
        premiumCount.textContent = count;
      }

      fetchData();