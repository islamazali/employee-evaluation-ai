// LlamaCloud Integration Module
import axios from 'axios';

const LLAMACLOUD_API_URL = process.env.NEXT_PUBLIC_LLAMACLOUD_API_URL || 'https://api.cloud.llamaindex.ai';
const API_KEY = process.env.LLAMACLOUD_API_KEY;
const AGENT_ID = process.env.NEXT_PUBLIC_LLAMACLOUD_AGENT_ID || '45d68edc-d5f5-45bf-8ee4-47ab81891d7e';

export interface EvaluationData {
  employeeData: {
    name: string;
    department: string;
    position: string;
    evaluationPeriod: string;
    evaluatorName: string;
  };
  performanceMetrics: Record<string, { score: number; comments: string }>;
  managementQuality: Record<string, { score: number; comments: string }>;
  aiAnalysis: {
    strengths: string[];
    weaknesses: string[];
    developmentAreas: string[];
    recommendations: string[];
    sentiment: 'positive' | 'neutral' | 'negative';
    overallScore: number;
  };
}

export async function extractEvaluationData(fileUrl: string): Promise<EvaluationData> {
  try {
    const response = await axios.post(
      `${LLAMACLOUD_API_URL}/agents/${AGENT_ID}/runs`,
      { input: { file_url: fileUrl } },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.output.output as EvaluationData;
  } catch (error) {
    console.error('Error extracting evaluation:', error);
    throw error;
  }
}

export async function analyzeWithAI(data: EvaluationData): Promise<string> {
  const prompt = `Analyze this evaluation: ${JSON.stringify(data)}`;
  return prompt;
}
