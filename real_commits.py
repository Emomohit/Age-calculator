import os
import subprocess

def run_git(cmd_list, cwd):
    print("Running", cmd_list, "in", cwd)
    subprocess.run(cmd_list, cwd=cwd, check=True)

# 1. mean-var-std: Add type hints
def step1():
    cwd = r"e:\mean-var-std"
    with open(os.path.join(cwd, "mean_var_std.py"), "r", encoding="utf-8") as f:
        content = f.read()
    
    if "from typing import List, Dict, Union" not in content:
        new_content = "from typing import List, Dict, Union\n" + content
        new_content = new_content.replace("def calculate(list):", "def calculate(list: List[int]) -> Dict[str, List[Union[List[float], float]]]:")
        
        with open(os.path.join(cwd, "mean_var_std.py"), "w", encoding="utf-8") as f:
            f.write(new_content)
        
        run_git(["git", "add", "mean_var_std.py"], cwd)
        run_git(["git", "commit", "-m", "Refactor: Add typing hints to calculate function for better DX"], cwd)

# 2. mean-var-std: Add docstrings
def step2():
    cwd = r"e:\mean-var-std"
    with open(os.path.join(cwd, "mean_var_std.py"), "r", encoding="utf-8") as f:
        content = f.read()
    
    docstring = '''    """
    Calculate mean, variance, standard deviation, max, min, and sum of a 3x3 matrix.
    
    Args:
        list: A list containing exactly 9 numbers.
        
    Returns:
        A dictionary containing the calculated statistics along axes 0, 1, and the flattened matrix.
    """'''
    
    if "Calculate mean, variance" not in content:
        new_content = content.replace("    if len(list) != 9:", docstring + "\n    if len(list) != 9:")
        with open(os.path.join(cwd, "mean_var_std.py"), "w", encoding="utf-8") as f:
            f.write(new_content)
            
        run_git(["git", "add", "mean_var_std.py"], cwd)
        run_git(["git", "commit", "-m", "Docs: Add comprehensive docstring to calculate function"], cwd)


# For Age-calculator, it's easier to append new sections using replace.
def step3():
    cwd = r"e:\Age-calculator"
    with open(os.path.join(cwd, "index.html"), "r", encoding="utf-8") as f:
        content = f.read()
        
    if '<span class="result-label">Next Birthday</span>' not in content:
        html_insert = '''
            <div class="result-item" style="background: rgba(255,105,180,0.1);">
                <span class="result-label">Next Birthday</span>
                <span class="result-value" id="nextBirthday" style="font-size: 1.2em; color: #ff69b4;">0</span>
            </div>'''
        content = content.replace('id="seconds">0</span>\n            </div>', 'id="seconds">0</span>\n            </div>' + html_insert)
        
        js_insert = '''
            // Next Birthday Logic
            let nextBday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
            if (today > nextBday) {
                nextBday.setFullYear(today.getFullYear() + 1);
            }
            const diffTime = Math.abs(nextBday - today);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            document.getElementById('nextBirthday').textContent = `In ${diffDays} days 🎈`;
'''
        # We need to find a safe place to insert JS in index.html.
        # Let's insert it right before the advice section gets populated.
        content = content.replace("const adviceText = document.getElementById('adviceText');", js_insert + "\n            const adviceText = document.getElementById('adviceText');")
        
        with open(os.path.join(cwd, "index.html"), "w", encoding="utf-8") as f:
            f.write(content)
            
        run_git(["git", "add", "index.html"], cwd)
        run_git(["git", "commit", "-m", "Feature: Add next birthday countdown calculation"], cwd)

def step4():
    cwd = r"e:\Age-calculator"
    with open(os.path.join(cwd, "index.html"), "r", encoding="utf-8") as f:
        content = f.read()
        
    if '<span class="result-label">Zodiac Sign</span>' not in content:
        html_insert = '''
            <div class="result-item" style="background: rgba(102,126,234,0.1);">
                <span class="result-label">Zodiac Sign</span>
                <span class="result-value" id="zodiac" style="font-size: 1.2em; color: #667eea;">✨</span>
            </div>'''
        content = content.replace('id="totalDays">0</span>\n            </div>', 'id="totalDays">0</span>\n            </div>' + html_insert)
        
        js_insert = '''
            // Zodiac Sign Logic
            const m = birth.getMonth() + 1;
            const d = birth.getDate();
            let sign = "";
            if ((m == 3 && d >= 21) || (m == 4 && d <= 19)) sign = "Aries ♈";
            else if ((m == 4 && d >= 20) || (m == 5 && d <= 20)) sign = "Taurus ♉";
            else if ((m == 5 && d >= 21) || (m == 6 && d <= 20)) sign = "Gemini ♊";
            else if ((m == 6 && d >= 21) || (m == 7 && d <= 22)) sign = "Cancer ♋";
            else if ((m == 7 && d >= 23) || (m == 8 && d <= 22)) sign = "Leo ♌";
            else if ((m == 8 && d >= 23) || (m == 9 && d <= 22)) sign = "Virgo ♍";
            else if ((m == 9 && d >= 23) || (m == 10 && d <= 22)) sign = "Libra ♎";
            else if ((m == 10 && d >= 23) || (m == 11 && d <= 21)) sign = "Scorpio ♏";
            else if ((m == 11 && d >= 22) || (m == 12 && d <= 21)) sign = "Sagittarius ♐";
            else if ((m == 12 && d >= 22) || (m == 1 && d <= 19)) sign = "Capricorn ♑";
            else if ((m == 1 && d >= 20) || (m == 2 && d <= 18)) sign = "Aquarius ♒";
            else sign = "Pisces ♓";
            document.getElementById('zodiac').textContent = sign;
'''
        content = content.replace("const adviceText = document.getElementById('adviceText');", js_insert + "\n            const adviceText = document.getElementById('adviceText');")
        
        with open(os.path.join(cwd, "index.html"), "w", encoding="utf-8") as f:
            f.write(content)
            
        run_git(["git", "add", "index.html"], cwd)
        run_git(["git", "commit", "-m", "Feature: Add Zodiac sign calculator based on birthdate"], cwd)

def step5():
    cwd = r"e:\Age-calculator"
    with open(os.path.join(cwd, "index.html"), "r", encoding="utf-8") as f:
        content = f.read()
        
    if '<span class="result-label">Life Milestone</span>' not in content:
        html_insert = '''
            <div class="result-item" style="background: rgba(255,200,0,0.1);">
                <span class="result-label">Life Milestone</span>
                <span class="result-value" id="milestone" style="font-size: 1.2em; color: #d4af37;">🏆</span>
            </div>'''
        content = content.replace('id="totalDays">0</span>\n            </div>', 'id="totalDays">0</span>\n            </div>' + html_insert)
        
        js_insert = '''
            // Milestone Logic
            let ms = "Keep growing!";
            const totalDaysLivedStr = document.getElementById('totalDays').textContent;
            const tDays = parseInt(totalDaysLivedStr.replace(/,/g, '')) || 0;
            if (tDays >= 10000 && tDays < 10100) ms = "10,000 Days Alive! 🏆";
            else if (years == 18) ms = "Official Adult! 🌟";
            else if (years == 21) ms = "Level 21 Unlocked! 🍻";
            else if (years == 50) ms = "Half Century! 👑";
            else if (tDays >= 20000 && tDays < 20100) ms = "20,000 Days Alive! 💎";
            else if (months >= 1000) ms = "1,000 Months! 🌌";
            document.getElementById('milestone').textContent = ms;
'''
        content = content.replace("const adviceText = document.getElementById('adviceText');", js_insert + "\n            const adviceText = document.getElementById('adviceText');")
        
        with open(os.path.join(cwd, "index.html"), "w", encoding="utf-8") as f:
            f.write(content)
            
        run_git(["git", "add", "index.html"], cwd)
        run_git(["git", "commit", "-m", "Feature: Add Life Milestones display (10k days, 50 years, etc)"], cwd)

def step6():
    try:
        run_git(["git", "push"], r"e:\Age-calculator")
    except Exception as e:
        print(e)
    try:
        run_git(["git", "push"], r"e:\mean-var-std")
    except Exception as e:
        print(e)

try:
    step1()
    step2()
    step3()
    step4()
    step5()
    step6()
    print("All tasks complete!")
except Exception as e:
    print("Error:", e)
