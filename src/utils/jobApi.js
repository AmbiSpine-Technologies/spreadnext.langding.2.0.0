const API_BASE_URL = "http://localhost:5000/api" || process.env.NEXT_PUBLIC_API_BASE_URL;
const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  const token = localStorage.getItem("token") || localStorage.getItem("spreadnext_token");
  return null;
};

const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  const token = getAuthToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

// Get all jobs with filters and pagination
export const getAllJobs = async (filters = {}, page = 1, limit = 12) => {
  try {
    const {
      search,
      location,
      workMode,
      jobType,
      industry,
      companySize,
      skills,
      sortBy,
      order,
    } = filters;

    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (search) queryParams.append("search", search);
    if (location) queryParams.append("location", location);
    if (workMode) queryParams.append("workMode", workMode);
    if (jobType) {
      if (Array.isArray(jobType)) {
        queryParams.append("jobType", jobType.join(","));
      } else {
        queryParams.append("jobType", jobType);
      }
    }
    if (industry) {
      if (Array.isArray(industry)) {
        queryParams.append("industry", industry.join(","));
      } else {
        queryParams.append("industry", industry);
      }
    }
    if (companySize) queryParams.append("companySize", companySize);
    if (skills) {
      if (Array.isArray(skills)) {
        queryParams.append("skills", skills.join(","));
      } else {
        queryParams.append("skills", skills);
      }
    }
    if (sortBy) queryParams.append("sortBy", sortBy);
    if (order) queryParams.append("order", order);

    const response = await fetch(`${API_BASE_URL}/jobs/all?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return {
      success: response.ok,
      data: data.data || [],
      pagination: data.pagination || {},
      message: data.message || (response.ok ? "Jobs fetched" : "Failed to fetch jobs"),
    };
  } catch (error) {
    console.error("Get all jobs error:", error);
    return { success: false, message: error.message, data: [] };
  }
};

// Get top trending jobs (Fixed to top 8)
export const getTrendingJobs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/trending`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    
    return {
      success: response.ok,
      data: data.data || [],
      message: data.message || (response.ok ? "Trending jobs fetched" : "Failed to fetch trending jobs"),
    };
  } catch (error) {
    console.error("Get trending jobs error:", error);
    return { 
      success: false, 
      message: error.message, 
      data: [] 
    };
  }
};