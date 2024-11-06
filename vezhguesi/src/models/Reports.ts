export class Report {
    subject: string;
    startDate: Date;
    endDate: Date;

    constructor() {
        this.subject = "";
        this.startDate = new Date();
        this.endDate = new Date();
    }
}


export interface EntitySentiment {
    name: string;
    related_topics: string[];
    sentiment_label: string;
    sentiment_score: number;
}

export interface TopicSentiment {
    name: string;
    related_entities: string[];
    sentiment_label: string;
    sentiment_score: number;
}

export interface AnalysisResults {
    entities: EntitySentiment[];
    topics: TopicSentiment[];
}

export interface ArticleMetadata {
    article_summary: string;
    id: number;
    published_date: string;
    scraped_at: string;
    title: string;
    url: string;
    url_id: number;
}

export interface Analysis {
    analysis_results: AnalysisResults;
    article_metadata: ArticleMetadata;
}

export interface ReportEntity {
    analyses: Analysis[];
    entity_name: string;
    total_articles: number;
    sentiment_label: string;
    average_sentiment: number;
    summary: string;
}

export interface MyReportsResponse {
    entities: ReportEntity[];
}