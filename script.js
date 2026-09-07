// KLP Consulting Services & Leadership Drift Interactive Engine

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#0b132b';
        navLinks.style.padding = '24px';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        navLinks.style.gap = '20px';
      }
    });
  }

  // Interactive Drift Diagnostic Calculator
  const diagnosticForm = document.getElementById('drift-diagnostic-form');
  const diagnosticResult = document.getElementById('diagnostic-result');

  if (diagnosticForm && diagnosticResult) {
    diagnosticForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const q1 = parseInt(document.querySelector('input[name="q1"]:checked')?.value || 0);
      const q2 = parseInt(document.querySelector('input[name="q2"]:checked')?.value || 0);
      const q3 = parseInt(document.querySelector('input[name="q3"]:checked')?.value || 0);
      const q4 = parseInt(document.querySelector('input[name="q4"]:checked')?.value || 0);

      const totalScore = q1 + q2 + q3 + q4;
      let riskLevel = '';
      let riskColor = '';
      let recommendation = '';
      let recommendedTool = '';

      if (totalScore <= 6) {
        riskLevel = 'Low Drift (Healthy Alignment)';
        riskColor = '#10b981';
        recommendation = 'Your team has strong operating discipline. Continue using regular checkpoints and quarterly autopsies to maintain high velocity.';
        recommendedTool = 'Leadership Behavioral Contract';
      } else if (totalScore <= 11) {
        riskLevel = 'Moderate Drift (Operational Seam Friction)';
        riskColor = '#f59e0b';
        recommendation = 'Friction is emerging at handoff points and priority creep is diluting focus. We recommend formalizing decision rights and enforcing capacity trade-offs.';
        recommendedTool = 'Priority Kill Switch & Seam Handoff Standard';
      } else {
        riskLevel = 'Severe Drift (Structural Overload & Misalignment)';
        riskColor = '#ef4444';
        recommendation = 'Critical priority overload and ambiguous decision authority are exhausting key talent. A structured 4-Week Leadership Sprint is urgently recommended.';
        recommendedTool = 'Decision Architecture Matrix & Complete Toolbox Bundle';
      }

      diagnosticResult.innerHTML = `
        <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.06);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Audit Result</span>
            <span style="background: ${riskColor}; color: #fff; font-weight: 700; font-size: 0.8rem; padding: 4px 12px; border-radius: 20px;">${riskLevel}</span>
          </div>
          <h4 style="font-size: 1.3rem; color: #0b132b; margin-bottom: 8px;">Friction Score: ${totalScore} / 16</h4>
          <p style="font-size: 0.95rem; color: #475569; margin-bottom: 16px;">${recommendation}</p>
          <div style="background: #f8fafd; border-left: 3.5px solid #c59b27; padding: 12px; border-radius: 0 6px 6px 0; margin-bottom: 16px;">
            <strong style="color: #0b132b; font-size: 0.9rem;">Recommended First Step:</strong>
            <p style="font-size: 0.88rem; color: #334155; margin-top: 2px;">Deploy the <strong>${recommendedTool}</strong> from your tools download bundle.</p>
          </div>
          <div style="display: flex; gap: 12px;">
            <a href="tools.html" class="btn btn-primary btn-sm">Download Recommended Tool</a>
            <a href="contact.html" class="btn btn-outline btn-sm">Schedule Executive Debrief</a>
          </div>
        </div>
      `;
      diagnosticResult.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
