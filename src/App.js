import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Shield, Users, AlertTriangle, CheckCircle, TrendingUp, TrendingDown, Info, FileText, Lock, Share2 } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data from the reports
  const timeSeriesData = [
    {
      period: 'Jan 2024',
      slackUsers: 130,
      emailAccounts: 293,
      bitwarden: 101,
      slack2FA: 77,
      email2FA: 288,
      unauthorized2FA: 2,
      securityTraining: 1,
      anyoneLinks: 5690,
      externalShares: 4039
    },
    {
      period: 'Feb 2024',
      slackUsers: 138,
      emailAccounts: 300,
      bitwarden: 105,
      slack2FA: 135,
      email2FA: 293,
      unauthorized2FA: 4,
      securityTraining: 15,
      anyoneLinks: 6399,
      externalShares: 4693
    },
    {
      period: 'Jun 2024',
      slackUsers: 156,
      emailAccounts: 291,
      bitwarden: 109,
      slack2FA: 134,
      email2FA: 289,
      unauthorized2FA: 1,
      securityTraining: 6,
      anyoneLinks: 8675,
      externalShares: 13282
    }
  ];

  const adoptionRates = [
    {
      period: 'Jan 2024',
      bitwardenRate: 77.69,
      slack2FARate: 59.23,
      email2FARate: 98.29,
      trainingRate: 0.77
    },
    {
      period: 'Feb 2024',
      bitwardenRate: 76.09,
      slack2FARate: 97.83,
      email2FARate: 97.67,
      trainingRate: 10.87
    },
    {
      period: 'Jun 2024',
      bitwardenRate: 81.34,
      slack2FARate: 100.00,
      email2FARate: 99.31,
      trainingRate: 4.48
    }
  ];

  const riskMetrics = [
    {
      period: 'Jan 2024',
      externalShareRisk: 70.98,
      unauthorized2FARate: 0.68
    },
    {
      period: 'Feb 2024',
      externalShareRisk: 73.34,
      unauthorized2FARate: 1.33
    },
    {
      period: 'Jun 2024',
      externalShareRisk: 153.11,
      unauthorized2FARate: 0.34
    }
  ];

  const currentMetrics = {
    totalUsers: 156,
    emailAccounts: 291,
    slack2FAAdoption: 100,
    email2FAAdoption: 99.31,
    bitwardenAdoption: 81.34,
    securityIncidents: 0,
    externalShareRisk: 153.11,
    trainingCompletion: 4.48
  };

  const MetricCard = ({ title, value, change, icon: Icon, trend, description, color = "blue" }) => {
    const colorClasses = {
      blue: "bg-gradient-to-r from-blue-500 to-cyan-500",
      green: "bg-gradient-to-r from-green-500 to-emerald-500", 
      red: "bg-gradient-to-r from-red-500 to-rose-500",
      purple: "bg-gradient-to-r from-purple-500 to-violet-500",
      orange: "bg-gradient-to-r from-orange-500 to-amber-500",
      pink: "bg-gradient-to-r from-pink-500 to-rose-500"
    };

    return (
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="group relative">
            <Info className="w-4 h-4 text-gray-400 cursor-help" />
            <div className="absolute right-0 top-6 bg-slate-900 text-white text-xs rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 w-48 border border-slate-700">
              {description}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-sm text-gray-300">{title}</p>
          {change && (
            <div className={`flex items-center text-sm ${trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-gray-400'}`}>
              {trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : 
               trend === 'down' ? <TrendingDown className="w-4 h-4 mr-1" /> : null}
              {change}
            </div>
          )}
        </div>
      </div>
    );
  };

  const RiskIndicator = ({ level, text }) => {
    const colors = {
      low: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
      medium: "bg-gradient-to-r from-orange-500 to-amber-500 text-white", 
      high: "bg-gradient-to-r from-orange-600 to-red-500 text-white",
      critical: "bg-gradient-to-r from-red-500 to-rose-500 text-white"
    };
    
    return (
      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${colors[level]} shadow-lg`}>
        {text}
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1a1f3a' }}>
      {/* Header */}
      <div className="border-b px-6 py-4" style={{ backgroundColor: '#252a47', borderColor: '#3a4063' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">CYBERSECURITY DASHBOARD</h1>
            </div>
          </div>
          <div className="text-sm text-gray-300">
            Last Updated: March 2025 | Analysis Period: Jan 2024 - Jun 2024
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b px-6" style={{ backgroundColor: '#252a47', borderColor: '#3a4063' }}>
        <div className="flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: Shield },
            { id: 'authentication', label: 'Authentication', icon: Lock },
            { id: 'sharing', label: 'Data Sharing', icon: Share2 },
            { id: 'training', label: 'Security Training', icon: Users }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                activeTab === tab.id 
                  ? 'border-purple-500 text-purple-400' 
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Security Status Summary */}
            <div className="rounded-xl p-6 border" style={{ backgroundColor: '#252a47', borderColor: '#3a4063' }}>
              <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                Security Posture Assessment
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <RiskIndicator level="medium" text="NEEDS ATTENTION" />
                  <p className="text-sm text-gray-300 mt-2">Overall Security Status</p>
                </div>
                <div className="text-center">
                  <RiskIndicator level="low" text="EXCELLENT" />
                  <p className="text-sm text-gray-300 mt-2">Authentication Security</p>
                </div>
                <div className="text-center">
                  <RiskIndicator level="critical" text="CRITICAL" />
                  <p className="text-sm text-gray-300 mt-2">Data Sharing Risk</p>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              <MetricCard
                title="Security Incidents"
                value="0"
                change="No incidents"
                icon={CheckCircle}
                trend="stable"
                color="green"
                description="Total security incidents reported across all time periods. Zero incidents indicates strong security controls."
              />
              <MetricCard
                title="Slack 2FA Adoption"
                value="100%"
                change="+40.77% from Jan"
                icon={Shield}
                trend="up"
                color="green"
                description="Percentage of active Slack users with two-factor authentication enabled. Perfect score achieved."
              />
              <MetricCard
                title="External Share Risk"
                value="153%"
                change="+82.13% from Jan"
                icon={AlertTriangle}
                trend="down"
                color="red"
                description="Risk level of external file sharing. Values over 100% indicate critical risk requiring immediate attention."
              />
              <MetricCard
                title="Training Completion"
                value="4.48%"
                change="-6.39% from Feb"
                icon={Users}
                trend="down"
                color="pink"
                description="Percentage of employees who completed security training. Low completion rate is a major concern."
              />
            </div>

            {/* Trends Chart */}
            <div className="rounded-xl p-6 border" style={{ backgroundColor: '#252a47', borderColor: '#3a4063' }}>
              <h3 className="text-lg font-semibold mb-4 text-white">Security Metrics Trends</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={adoptionRates}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3a4063" />
                  <XAxis dataKey="period" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1f3a', border: '1px solid #3a4063', borderRadius: '8px' }}
                    labelStyle={{ color: '#F3F4F6' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="slack2FARate" stroke="#10B981" strokeWidth={3} name="Slack 2FA %" />
                  <Line type="monotone" dataKey="email2FARate" stroke="#3B82F6" strokeWidth={3} name="Email 2FA %" />
                  <Line type="monotone" dataKey="bitwardenRate" stroke="#8B5CF6" strokeWidth={3} name="Password Manager %" />
                  <Line type="monotone" dataKey="trainingRate" stroke="#F59E0B" strokeWidth={3} name="Training %" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Risk Trends */}
            <div className="rounded-xl p-6 border" style={{ backgroundColor: '#252a47', borderColor: '#3a4063' }}>
              <h3 className="text-lg font-semibold mb-4 text-white">Risk Indicators Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={riskMetrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3a4063" />
                  <XAxis dataKey="period" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1f3a', border: '1px solid #3a4063', borderRadius: '8px' }}
                    labelStyle={{ color: '#F3F4F6' }}
                  />
                  <Area type="monotone" dataKey="externalShareRisk" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} name="External Share Risk %" />
                  <Area type="monotone" dataKey="unauthorized2FARate" stroke="#F97316" fill="#F97316" fillOpacity={0.3} name="Unauthorized 2FA %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'authentication' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <MetricCard
                title="Email 2FA Coverage"
                value="99.31%"
                change="+1.02% from Jan"
                icon={Shield}
                trend="up"
                color="green"
                description="Percentage of email accounts with two-factor authentication enabled. Target is 100%."
              />
              <MetricCard
                title="Password Manager Users"
                value="109"
                change="+8 from Jan"
                icon={Lock}
                trend="up"
                color="blue"
                description="Number of users actively using Bitwarden password manager for credential security."
              />
              <MetricCard
                title="Unauthorized 2FA Exceptions"
                value="1"
                change="-1 from Feb"
                icon={AlertTriangle}
                trend="up"
                color="orange"
                description="Accounts without 2FA that don't have authorized exemptions. Target is 0."
              />
            </div>

            <div className="rounded-xl p-6 border" style={{ backgroundColor: '#252a47', borderColor: '#3a4063' }}>
              <h3 className="text-lg font-semibold mb-4 text-white">2FA Adoption Progress</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3a4063" />
                  <XAxis dataKey="period" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1f3a', border: '1px solid #3a4063', borderRadius: '8px' }}
                    labelStyle={{ color: '#F3F4F6' }}
                  />
                  <Legend />
                  <Bar dataKey="slack2FA" fill="#10B981" name="Slack 2FA Enabled" />
                  <Bar dataKey="email2FA" fill="#3B82F6" name="Email 2FA Enabled" />
                  <Bar dataKey="unauthorized2FA" fill="#EF4444" name="Unauthorized Exceptions" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'sharing' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <MetricCard
                title="External Domain Shares"
                value="13,282"
                change="+9,243 from Jan (+228%)"
                icon={Share2}
                trend="down"
                color="red"
                description="Files shared with external domains. Dramatic increase indicates potential data exposure risk."
              />
              <MetricCard
                title="Anyone with Link Shares"
                value="8,675"
                change="+2,985 from Jan (+52%)"
                icon={FileText}
                trend="down"
                color="orange"
                description="Files accessible to anyone with the link. High numbers increase risk of unauthorized access."
              />
            </div>

            <div className="rounded-xl p-6 border" style={{ backgroundColor: '#252a47', borderColor: '#3a4063' }}>
              <h3 className="text-lg font-semibold mb-4 text-white">File Sharing Growth</h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3a4063" />
                  <XAxis dataKey="period" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1f3a', border: '1px solid #3a4063', borderRadius: '8px' }}
                    labelStyle={{ color: '#F3F4F6' }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="externalShares" stackId="1" stroke="#EF4444" fill="#EF4444" name="External Shares" />
                  <Area type="monotone" dataKey="anyoneLinks" stackId="1" stroke="#F59E0B" fill="#F59E0B" name="Anyone with Link" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gradient-to-r from-red-900 to-pink-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-3 text-red-400 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Critical Alert: Data Sharing Risk
              </h3>
              <p className="text-red-300 mb-4">
                External sharing has increased by 283% since January 2024. This creates significant data exposure risk and requires immediate action.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-red-300">• Conduct emergency file sharing audit</p>
                <p className="text-red-300">• Implement data loss prevention (DLP) controls</p>
                <p className="text-red-300">• Review and revoke unnecessary external access</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'training' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <MetricCard
                title="Training Completion Rate"
                value="4.48%"
                change="-6.39% from Feb"
                icon={Users}
                trend="down"
                color="red"
                description="Percentage of total workforce that completed security training. Target is 90%."
              />
              <MetricCard
                title="Employees Trained"
                value="6"
                change="-9 from Feb"
                icon={CheckCircle}
                trend="down"
                color="orange"
                description="Absolute number of employees who completed security training this period."
              />
            </div>

            <div className="rounded-xl p-6 border" style={{ backgroundColor: '#252a47', borderColor: '#3a4063' }}>
              <h3 className="text-lg font-semibold mb-4 text-white">Security Training Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3a4063" />
                  <XAxis dataKey="period" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1f3a', border: '1px solid #3a4063', borderRadius: '8px' }}
                    labelStyle={{ color: '#F3F4F6' }}
                  />
                  <Line type="monotone" dataKey="securityTraining" stroke="#F59E0B" strokeWidth={3} name="Employees Trained" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gradient-to-r from-yellow-900 to-orange-900 bg-opacity-20 border border-yellow-500 border-opacity-30 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Training Recommendations
              </h3>
              <div className="space-y-2 text-sm text-yellow-300">
                <p>• Make security training mandatory for all employees</p>
                <p>• Set deadline for 90% completion within 60 days</p>
                <p>• Implement consequences for non-completion</p>
                <p>• Investigate why training completion declined by 60%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;