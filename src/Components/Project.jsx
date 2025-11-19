import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import './Project.css';

const Projects = () => {
  return (
    <div className="projects">
      <h4 className="projects-heading4">Explore My</h4>
      <h1 className="projects-heading1">Projects</h1>

      
      <div className="projects-signature-forgery">
        <h2 className="project-title">
          <FaProjectDiagram /> Signature Forgery Prediction using DenseNet & Cyclical Learning Rate
        </h2>
        <h3 className="project-description">
          A deep-learning–based approach to detect forged signatures using grayscale, edge-enhanced images. The system leverages DenseNet121 and a two-phase training strategy to accurately distinguish genuine signatures from forgeries, offering a reliable solution for document verification.
        </h3>
        <ul className="project-details">
          <li>Developed a custom preprocessing pipeline using Laplacian edge enhancement and grayscale normalization to highlight signature structure.</li>
          <li>Implemented a DenseNet121 architecture fine-tuned for binary classification, achieving 96.4% test accuracy.</li>
          <li>Applied a Cyclical Learning Rate strategy for faster convergence and improved generalization.</li>
          <li>Designed a full evaluation workflow including ROC/PR curves, misclassification analysis, and prediction distribution visualization.</li>
        </ul>
      </div>

      
      <div className="projects-Rag-chatbot">
        <h2 className="project-title">
          <FaProjectDiagram /> From Prospectus to Personal Assistant - RAG Driven Chatbot for M.Tech-Admissions
        </h2>
        <h3 className="project-description">
          An intelligent conversational assistant designed to answer M.Tech admission queries through Retrieval-Augmented Generation (RAG). The system combines document retrieval with the reasoning capabilities of LLaMA-3-8B to deliver highly accurate, context-aware responses to student queries.
        </h3>
        <ul className="project-details">
          <li>Built a custom pipeline for PDF parsing, text chunking, and metadata-based organization of university documents.</li>
          <li>Implemented ChromaDB for efficient retrieval and integrated Meta LLaMA-3-8B via Groq API for fast, low-latency generation.</li>
          <li>Enhanced contextual accuracy through improved embedding strategies and reranking.</li>
          <li>Designed the overall system architecture using LangChain and RASA to support multi-turn conversations and scalable chatbot behavior.</li>
        </ul>
        <a 
        href="https://github.com/Amalaa-George/From-Prospectus-to-Personal-Assistant-RAG-Driven-Chatbot-for-M.Tech-Admissions" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
        >
        View Repository 
        </a>
        </div>

      
      <div className="projects-Diabeties-prediction">
        <h2 className="project-title">
          <FaProjectDiagram /> Enhanced Diabetes Risk Prediction with Random Forest Optimization
        </h2>
        <h3 className="project-description">
          A machine learning solution developed to predict diabetes risk using structured clinical data. The model focuses on balanced learning and robust generalization to support early risk identification in healthcare settings.
        </h3>
        <ul className="project-details">
          <li>Created an end-to-end ML pipeline including data cleaning, outlier handling, feature scaling, and missing-value treatment.</li>
          <li>Applied SMOTE to handle class imbalance and performed hyperparameter tuning for Random Forest, achieving 95.5% accuracy.</li>
          <li>Evaluated model performance using precision, recall, F1-score, and ROC analysis.</li>
        </ul>
        <a 
        href="https://github.com/Amalaa-George/optimized-diabetes-risk-prediction" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
        >
        View Repository 
        </a>
      </div>

      
      <div className="projects-Sentiment-based-Recommendation">
        <h2 className="project-title">
          <FaProjectDiagram /> Sentiment-Driven Recommendation System for Personalized Suggestions
        </h2>
        <h3 className="project-description">
          A hybrid recommendation system that integrates sentiment analysis with user-based filtering to generate personalized suggestions. The approach uses ML-powered sentiment classification to enhance the accuracy of recommendations.
        </h3>
        <ul className="project-details">
          <li>Developed sentiment classification models using Logistic Regression, Naive Bayes, and XGBoost, with XGBoost delivering superior performance on text polarity prediction.</li>
          <li>Combined model outputs with a user-based recommendation engine evaluated using RMSE for accuracy.</li>
          <li>Implemented preprocessing steps including tokenization, stopword filtering, and TF-IDF vectorization to optimize text learning efficiency.</li>
        </ul>
      </div>

      
      <div className="projects-Heart-failure-prediction">
        <h2 className="project-title">
          <FaProjectDiagram /> Predictive Modeling for Heart Failure Risk Assessment

        </h2>
        <h3 className="project-description">
          A predictive analytics system designed to assess the likelihood of heart failure using patient health parameters. The project explores multiple ML algorithms to identify the most reliable model for clinical decision support.
        </h3>
        <ul className="project-details">
          <li>Built predictive models using Logistic Regression, Random Forest, and SVM, with Random Forest achieving the most stable and high-performing results.</li>
          <li>Conducted exploratory data analysis and feature correlation studies to identify critical clinical indicators.</li>
          <li>Designed visualizations to interpret risk factors and support medical insights.</li>
        </ul>
        <a 
        href="https://github.com/Amalaa-George/Heart-failure-prediction" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
        >
        View Repository 
        </a>
      </div>
    </div>
  );
};

export default Projects;
