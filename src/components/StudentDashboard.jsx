import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';

const StudentDashboard = ({ student, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateGPA = () => {
    if (!student.grades || student.grades.length === 0) return 0;
    const total = student.grades.reduce((sum, grade) => sum + (grade.score / grade.maxScore) * 100, 0);
    return (total / student.grades.length).toFixed(1);
  };

  const getAttendanceRate = () => {
    if (!student.attendance || student.attendance.length === 0) return 0;
    const present = student.attendance.filter(att => att.present).length;
    return ((present / student.attendance.length) * 100).toFixed(1);
  };

  const tabs = [
    { id: 'overview', name: 'Genel Bakış', icon: '📊' },
    { id: 'grades', name: 'Notlarım', icon: '📝' },
    { id: 'attendance', name: 'Devamsızlık', icon: '📅' },
    { id: 'homework', name: 'Ödevlerim', icon: '📚' }
  ];

  return (
    <div className="student-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="student-info">
            <h1>Merhaba, {student.name}! 👋</h1>
            <p className="class-info">{student.class}</p>
          </div>
          <button onClick={onLogout} className="logout-btn">
            🚪 Çıkış Yap
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="dashboard-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-info">
                  <h3>Not Ortalaması</h3>
                  <p className="stat-value">{calculateGPA()}</p>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-info">
                  <h3>Devam Oranı</h3>
                  <p className="stat-value">%{getAttendanceRate()}</p>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">📚</div>
                <div className="stat-info">
                  <h3>Toplam Ödev</h3>
                  <p className="stat-value">{student.homework?.length || 0}</p>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">📝</div>
                <div className="stat-info">
                  <h3>Sınav Sayısı</h3>
                  <p className="stat-value">{student.grades?.length || 0}</p>
                </div>
              </div>
            </div>

            <div className="recent-activities">
              <h2>Son Aktiviteler</h2>
              <div className="activity-list">
                {student.grades?.slice(0, 3).map((grade, index) => (
                  <div key={index} className="activity-item">
                    <span className="activity-icon">📝</span>
                    <div className="activity-details">
                      <p><strong>{grade.subject}</strong> - {grade.type}</p>
                      <p className="activity-date">{formatDate(grade.date)}</p>
                    </div>
                    <span className="activity-score">{grade.score}/{grade.maxScore}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'grades' && (
          <div className="grades-section">
            <h2>📝 Notlarım</h2>
            <div className="grades-grid">
              {student.grades?.map((grade, index) => (
                <div key={index} className="grade-card">
                  <div className="grade-header">
                    <h3>{grade.subject}</h3>
                    <span className="grade-type">{grade.type}</span>
                  </div>
                  <div className="grade-score">
                    <span className="score">{grade.score}</span>
                    <span className="max-score">/{grade.maxScore}</span>
                  </div>
                  <div className="grade-percentage">
                    %{((grade.score / grade.maxScore) * 100).toFixed(0)}
                  </div>
                  <div className="grade-date">{formatDate(grade.date)}</div>
                  {grade.note && (
                    <div className="grade-note">💭 {grade.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="attendance-section">
            <h2>📅 Devamsızlık Durumum</h2>
            <div className="attendance-stats">
              <div className="attendance-summary">
                <div className="summary-item">
                  <span className="summary-label">Toplam Gün:</span>
                  <span className="summary-value">{student.attendance?.length || 0}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Devam Eden:</span>
                  <span className="summary-value present">
                    {student.attendance?.filter(att => att.present).length || 0}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Devamsızlık:</span>
                  <span className="summary-value absent">
                    {student.attendance?.filter(att => !att.present).length || 0}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="attendance-list">
              {student.attendance?.map((attendance, index) => (
                <div key={index} className={`attendance-item ${attendance.present ? 'present' : 'absent'}`}>
                  <div className="attendance-date">{formatDate(attendance.date)}</div>
                  <div className="attendance-status">
                    {attendance.present ? '✅ Devam Etti' : '❌ Devamsızlık'}
                  </div>
                  {attendance.note && (
                    <div className="attendance-note">{attendance.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'homework' && (
          <div className="homework-section">
            <h2>📚 Ödevlerim</h2>
            <div className="homework-list">
              {student.homework?.map((hw, index) => (
                <div key={index} className={`homework-item ${hw.completed ? 'completed' : 'pending'}`}>
                  <div className="homework-header">
                    <h3>{hw.subject}</h3>
                    <span className={`homework-status ${hw.completed ? 'completed' : 'pending'}`}>
                      {hw.completed ? '✅ Tamamlandı' : '⏳ Bekliyor'}
                    </span>
                  </div>
                  <div className="homework-description">{hw.description}</div>
                  <div className="homework-dates">
                    <span>Verildi: {formatDate(hw.assignedDate)}</span>
                    <span>Teslim: {formatDate(hw.dueDate)}</span>
                  </div>
                  {hw.note && (
                    <div className="homework-note">💭 {hw.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;